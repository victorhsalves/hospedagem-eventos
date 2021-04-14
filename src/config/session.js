const jwt = require('jsonwebtoken');

module.exports = {
    User(req, res, next) {

        try {
            const token = req.headers.authorization;
            const decode = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = decode;
            next();
        } catch (e) {
            return res.status(401).json({ err: 'Não autorizado', reason: e });
        }
    }
}