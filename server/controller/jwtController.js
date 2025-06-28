import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (req, res, next) => {
// 🔍 Extract token from headers — make case-insensitive (authorization or Authorization)
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    // console.log('Auth Header:', authHeader);

    const token = authHeader?.split(' ')[1];
    // console.log('Token extracted:', token);

    if(token == null){
        return res.status(401).json({msg: 'token is missing'}); 
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
        if(error){
            return res.status(401).json({msg:'invalid token'})
        }

        req.user = user;
        next();
    })    
}