const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '../..');
const BACKEND_DIR = path.join(ROOT, 'backend');
const FRONTEND_DIR = path.join(ROOT, 'frontend');

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};

  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
  const env = {};

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const index = line.indexOf('=');
    if (index <= 0) continue;

    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    env[key] = value;
  }

  return env;
}

function runCommand(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      shell: true,
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed: ${command} ${args.join(' ')} (exit ${code})`));
      }
    });
  });
}

function requestJson(url) {
  return fetch(url).then(async (response) => {
    const text = await response.text();
    let body = null;

    try {
      body = JSON.parse(text);
    } catch {
      body = text;
    }

    return {
      status: response.status,
      body,
    };
  });
}

async function waitForBackend(baseUrl, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      const health = await requestJson(`${baseUrl}/health`);
      if (health.status === 200 && health.body && health.body.ok === true) {
        return;
      }
    } catch {
      // Backend aún no está listo
    }

    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  throw new Error('Timeout esperando a que backend esté listo en /health');
}

function assertCategoryShape(category) {
  if (typeof category.id !== 'number') throw new Error('category.id debe ser number');
  if (typeof category.name !== 'string') throw new Error('category.name debe ser string');
  if (typeof category.description !== 'string') throw new Error('category.description debe ser string');
}

function assertProductShape(product, expectedCategoryId) {
  if (typeof product.id !== 'number') throw new Error('product.id debe ser number');
  if (product.categoryId !== expectedCategoryId) throw new Error('product.categoryId no coincide con la categoría solicitada');
  if (typeof product.name !== 'string') throw new Error('product.name debe ser string');
  if (typeof product.shortDescription !== 'string') throw new Error('product.shortDescription debe ser string');
  if (typeof product.longDescription !== 'string') throw new Error('product.longDescription debe ser string');
  if (typeof product.price !== 'number') throw new Error('product.price debe ser number');
  if (typeof product.image !== 'string') throw new Error('product.image debe ser string');
  if (typeof product.inStock !== 'boolean') throw new Error('product.inStock debe ser boolean');

  if (!('genre' in product)) throw new Error('product.genre faltante');
  if (!('developer' in product)) throw new Error('product.developer faltante');
  if (!('players' in product)) throw new Error('product.players faltante');
  if (!('releaseDate' in product)) throw new Error('product.releaseDate faltante');
  if (!('rating' in product)) throw new Error('product.rating faltante');
}

async function main() {
  console.log('1) Preparando base de datos (db:bootstrap)...');
  await runCommand('npm', ['run', 'db:bootstrap'], ROOT);

  console.log('2) Levantando backend...');
  const backendProcess = spawn('npm', ['start'], {
    cwd: BACKEND_DIR,
    shell: true,
    stdio: 'inherit',
  });

  let backendClosed = false;
  backendProcess.on('exit', () => {
    backendClosed = true;
  });

  try {
    const frontendEnv = parseEnvFile(path.join(FRONTEND_DIR, '.env'));
    const apiBaseUrl = frontendEnv.VITE_API_BASE_URL || 'http://localhost:3000/api';
    const backendBaseUrl = apiBaseUrl.replace(/\/api\/?$/, '');

    console.log(`3) Esperando backend en ${backendBaseUrl}...`);
    await waitForBackend(backendBaseUrl);

    console.log('4) Validando conexión front->back (endpoint de categorías)...');
    const categoriesResponse = await requestJson(`${apiBaseUrl}/categories`);
    if (categoriesResponse.status !== 200) {
      throw new Error(`GET /categories devolvió ${categoriesResponse.status}`);
    }
    if (!Array.isArray(categoriesResponse.body) || categoriesResponse.body.length === 0) {
      throw new Error('GET /categories no devolvió categorías válidas');
    }

    categoriesResponse.body.forEach(assertCategoryShape);

    console.log('5) Validando conexión front->back (endpoint de productos por categoría)...');
    const categoryId = categoriesResponse.body[0].id;
    const productsResponse = await requestJson(`${apiBaseUrl}/categories/${categoryId}/products`);

    if (productsResponse.status !== 200) {
      throw new Error(`GET /categories/${categoryId}/products devolvió ${productsResponse.status}`);
    }

    if (!Array.isArray(productsResponse.body)) {
      throw new Error('GET /categories/:id/products no devolvió un array');
    }

    productsResponse.body.forEach((product) => assertProductShape(product, categoryId));

    console.log('✅ Integración Front-Back OK: configuración del front + endpoints del back + contrato de datos validados.');
  } finally {
    if (!backendClosed) {
      backendProcess.kill();
    }
  }
}

main().catch((error) => {
  console.error('❌ Falló test de integración Front-Back');
  console.error(error.message);
  process.exit(1);
});
