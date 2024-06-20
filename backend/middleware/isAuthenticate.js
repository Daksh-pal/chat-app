import jwt from 'jsonwebtoken';

export const isAuthenticate = async(req,res,next) => {
    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(400).json({
                message: "User not authenticated"
            })
        }

        const decode = jwt.verify(token , process.env.JWT);
        if(!decode){
            return res.status(400).json({
                message : "Invalid Token"
            })
        }
        req.id = decode.userId
        next();
    } catch (error) {
        console.log(error);
    }
}
