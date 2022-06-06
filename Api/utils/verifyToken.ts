import express from 'express'
import jwt from 'jsonwebtoken'
import { createError } from './error'


export const verifyToken =  (req: any, res: express.Response,  next: express.NextFunction) =>{
     const token = req.cookies.access_token
     if(!token){
         return next(createError(401, " you are  authenticated"))
     }
     jwt.verify(token,process.env.JWT || "" ,  (err: any, user: any) =>{
         if(err) return next(createError(401, "Token is not valid"))
         req.user = user;
         next()
     })
}

export const verifyUser = (req: any, res: express.Response, next: express.NextFunction) => {
    verifyToken(  req , res,   () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
          next();
        } else {
          return next(createError(403, "You are not authorized!"));
        }
      }) ;
  };


  export const verifyAdmin = (req: any, res: express.Response, next: express.NextFunction) => {
    verifyToken(  req , res,    () => {
        if ( req.user.isAdmin) {
          next();
        } else {
          return next(createError(403, "You are not authorized!"));
        }
      }) ;
  };
  