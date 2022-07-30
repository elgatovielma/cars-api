const jwt = require('jsonwebtoken');

// Check if it is an authorized user 
const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send({ message: "You are not authenticated" });
    try {
        await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch (err) {
        console.log(`err ${err}`);
        const errMessage = err.message.split(' ')[0];
        if (errMessage == 'jwt') return res.status(401).send({ message: "You are not authenticated" });
        res.status(500).send({ message: `Something went wrong` });
    }
}

module.exports = authenticateToken;