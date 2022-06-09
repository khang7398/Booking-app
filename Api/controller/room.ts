import express from "express"
import Hotel from "../models/Hotel"
import Room from "../models/Room"

export const createRoom = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}})
        }catch(err){
            next(err)
        }
    res.status(200).json(savedRoom)    
    }catch(err){
        next(err)
    }

}

export const updateRoom = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try{
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(updateRoom)
    }catch(err){
        next(err)
    }
}

export const deleteRoom = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    const hotelId = req.params.hotelid
    try{
        await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndDelete(hotelId, {$pull: {rooms: req.params.id}})
        }catch(err){
            next(err)
        }
        res.status(200).json("Room has been deleted")
    }catch(err){
        next(err)
    }
}


export const findRoom = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try{
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    }catch(err){
        next(err)
    }
}

export const findAllRoom = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try{
        const rooms = await Room.find()
        res.status(200).json(rooms)
    }catch(err){
        next(err)
    }
}
