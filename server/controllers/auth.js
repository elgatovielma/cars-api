const jwt = require('jsonwebtoken');

// Store refheshTokens in an array just for demostration purposes,
// in reality, they should be stored for example in something like a Redis 
let refreshTokens = [];

// expiresIn should be higher in real life situations
const generateAccessToken= (user) => jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60s' }); 

// Authenticate User
exports.login = async (req, res) => {
    /* 
        if there would be a database storing the users, the user should be validated against the database
        to see if they are registered 
    */

    // Generate token process 
    const email = req.body.email;
    const user = { email: email };
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    res.send({ accessToken: accessToken, refreshToken: refreshToken });
}

// New token 
exports.token = async (req, res) => {
    const refreshToken = req.body.token;
    // Verify token status
    if (!refreshToken) return res.status(401).send({ message: "You are not authenticated" });
    if (!refreshTokens.includes(refreshToken)) return res.status(403).send({ message: "You have no permission" });
    try {
        // Generate new token if old one expired or user just wants a new one
        const decode = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const accessToken = generateAccessToken({ email: decode.email });
        res.send({ accessToken: accessToken });
    } catch (err) {
        console.log(`err ${err}`);
        if (!refreshTokens.includes(refreshToken)) return res.status(403).send({ message: "You have no permission" });
        res.status(500).send({ message: `Something went wrong` });
    }
}

// logout user
exports.logout = async (req, res) => {
    // Remove refresh token from array. If using Redis they should be removed from the Redis instead
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204);
}