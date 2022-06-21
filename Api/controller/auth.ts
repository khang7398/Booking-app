import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User"
import { createError } from "../utils/error";

export const register = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser =  new User({
            ...req.body,
            password:hash,
        })
        await newUser.save()
        res.status(200).json("user has been created")
    }
    catch(err){
        next(err)
    }
}

export const login = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const user: any = await User.findOne({username: req.body.username})
        if(!user) return next(createError(404, "User not found"))

        const isPasswordcorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordcorrect) return next(createError(400, "wrong password or username"))

        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, process.env.JWT || "")
        
        const {password, isAdmin, ...otherDetails} = user._doc

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({details:{ ...otherDetails, isAdmin}})
    }
    catch(err){
        next(err)
    }
}

