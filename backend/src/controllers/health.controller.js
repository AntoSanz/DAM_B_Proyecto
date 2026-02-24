function check(_req, res) {
  res.json({ ok: true, message: 'Backend running' });
}

module.exports = {
  check,
};