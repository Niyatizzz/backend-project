const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")

//when a user passes token, we have to validate the token and verify
//middleware for validation

const validateToken = asyncHandler(async(requestAnimationFrame, resizeBy, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader && authHeader.startWith("bearer")) {
        token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("user not authorized");
                 
            }
            req.user = decoded.user;
            next();
        })

        if(!token){
            res.status(401);
            throw new Error("user not authorized");
            
        }
    }
})

module.exports = validateToken