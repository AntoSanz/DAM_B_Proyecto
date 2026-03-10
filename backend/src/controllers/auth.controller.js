const authService = require('../services/auth.service');

function register(req, res) {
  const result = authService.register(req.body || {});

  if (!result.ok) {
    return res.status(result.status).json({
      ok: false,
      message: result.message,
    });
  }

  return res.status(result.status).json({
    ok: true,
    user: result.user,
  });
}

function login(req, res) {
  const result = authService.login(req.body || {});

  if (!result.ok) {
    return res.status(result.status).json({
      ok: false,
      message: result.message,
    });
  }

  return res.status(result.status).json({
    ok: true,
    user: result.user,
  });
}

module.exports = {
  register,
  login,
};
