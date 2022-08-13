const jwt = require('jsonwebtoken');


const config = process.env;

const verifyToken = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["X-access-token"];

    if(!token){
        return res.status(403).send("Token is required for authentication");
    }

    try{
        const decode = jwt.verify(token, config.TOKEN_KEY)
        req.user = decode;
    }catch (e) {
       return res.status(401).send("Invalid Token")
    }

    return next();
}

module.export = verifyToken;