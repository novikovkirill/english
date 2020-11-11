const reply = (res, body, status = 200) => res.status(status).json(body);
module.exports = { reply };