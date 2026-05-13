import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from git import Repo
from datetime import datetime, timezone
import sys
import os

repo_path = sys.argv[1] if len(sys.argv) > 1 else "."
repo = Repo(repo_path)

# Obtener todos los commits con fecha
all_commits = list(repo.iter_commits('--all'))

# Agrupar por mes
meses = {}
for c in all_commits:
    dt = datetime.fromtimestamp(c.committed_date, tz=timezone.utc)
    clave = (dt.year, dt.month)
    if clave not in meses:
        meses[clave] = []
    meses[clave].append(c)

# Filtrar desde enero del año actual hasta hoy
anio_actual = datetime.now().year
meses_filtrados = {k: v for k, v in meses.items() if k >= (anio_actual, 1)}

if not meses_filtrados:
    print("No se encontraron commits desde enero de este año.")
    sys.exit(1)

nombres_mes = {
    1: "Enero", 2: "Febrero", 3: "Marzo", 4: "Abril",
    5: "Mayo", 6: "Junio", 7: "Julio", 8: "Agosto",
    9: "Septiembre", 10: "Octubre", 11: "Noviembre", 12: "Diciembre"
}

colors = ['#89b4fa', '#a6e3a1', '#fab387', '#f38ba8',
          '#cba6f7', '#94e2d5', '#f9e2af', '#89dceb']

os.makedirs("git_graphs", exist_ok=True)

def generar_grafico(commits_mes, titulo, nombre_archivo):
    commits = list(reversed(commits_mes))
    commit_index = {c.hexsha: i for i, c in enumerate(commits)}

    # Asignar carriles
    branch_map = {}
    lane_counter = [0]

    def get_lane(hexsha):
        if hexsha not in branch_map:
            branch_map[hexsha] = lane_counter[0]
            lane_counter[0] += 1
        return branch_map[hexsha]

    for ref in repo.references:
        if ref.commit.hexsha in commit_index:
            get_lane(ref.commit.hexsha)

    for c in commits:
        get_lane(c.hexsha)

    n = len(commits)
    if n == 0:
        print(f"  Sin commits — omitiendo {titulo}")
        return

    fig_height = max(6, n * 0.4)
    fig, ax = plt.subplots(figsize=(16, fig_height))
    ax.set_facecolor('#1e1e2e')
    fig.patch.set_facecolor('#1e1e2e')

    for c in commits:
        y = commit_index[c.hexsha]
        x = get_lane(c.hexsha)
        color = colors[x % len(colors)]

        for p in c.parents:
            if p.hexsha in commit_index:
                py = commit_index[p.hexsha]
                px = get_lane(p.hexsha)
                pc = colors[px % len(colors)]
                ax.plot([x, px], [y, py], color=pc, linewidth=1.5, alpha=0.6, zorder=1)

        ax.scatter(x, y, color=color, s=80, zorder=3)

        msg = c.message.split('\n')[0][:55]
        dt = datetime.fromtimestamp(c.committed_date, tz=timezone.utc)
        label = f"{c.hexsha[:7]}  [{dt.strftime('%d/%m')}]  {msg}"
        ax.text(x + 0.15, y, label, color='#cdd6f4', fontsize=7,
                va='center', fontfamily='monospace', zorder=4)

    # Etiquetas de ramas
    for ref in repo.references:
        sha = ref.commit.hexsha
        if sha in commit_index:
            y = commit_index[sha]
            x = get_lane(sha)
            ax.text(x, y + 0.4, ref.name, color='#f9e2af', fontsize=6,
                    ha='center', fontweight='bold',
                    bbox=dict(boxstyle='round,pad=0.2', fc='#313244', ec='#f9e2af', lw=0.8))

    ax.set_xlim(-0.5, max(branch_map.values(), default=0) + 2)
    ax.set_ylim(-1, n + 1)
    ax.axis('off')
    ax.set_title(titulo, color='#cdd6f4', fontsize=14, pad=12)

    ruta = os.path.join("git_graphs", nombre_archivo)
    plt.savefig(ruta, dpi=150, bbox_inches='tight', facecolor=fig.get_facecolor())
    plt.close()
    print(f"✅ Guardado: {ruta}  ({n} commits)")

# Generar una imagen por mes
for (anio, mes) in sorted(meses_filtrados.keys()):
    nombre_mes = nombres_mes[mes]
    titulo = f"Git Graph — {nombre_mes} {anio}"
    nombre_archivo = f"{anio}_{mes:02d}_{nombre_mes}.png"
    commits_mes = meses_filtrados[(anio, mes)]
    print(f"Generando {titulo}...")
    generar_grafico(commits_mes, titulo, nombre_archivo)

print(f"\n🎉 Todas las imágenes guardadas en la carpeta 'git_graphs/'")