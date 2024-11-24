const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        // Get the token from cookies or Authorization header
        const token = req.cookies?.token || req.headers['authorization']?.split(' ')[1]; // Extract from Bearer
        if(!token){
            return res.status(401).json({
                message: "User not Logged in",
                error: true,
                success: false
            })
        }
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            
            if(err){
                return res.status(403).json({
                    message: "Please login first",
                    error: true,
                    success: false,
                });
            }

            // Attach the decoded token (user data) to the request object
            req.userId = decoded?._id;
            next()

          });

        
    }catch (error) {
        res.status(500).json({
            message: error.message || error,
            data: [],
            success: false,
            error: true
        })
    }
}

module.exports = authToken