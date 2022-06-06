import express from "express"
import Hotel from "../models/Hotel"

export const createHotel = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    const newHotel =  new Hotel(req.body) 
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}

export const updateHotel = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(updateHotel)
    }catch(err){
        next(err)
    }
}

export const deleteHotel = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    }catch(err){
        next(err)
    }
}

export const findHotel = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    }catch(err){
        next(err)
    }
}

export const findAllHotel = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    }catch(err){
        next(err)
    }
}

