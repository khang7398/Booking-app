import express from "express"
import Hotel from "../models/Hotel"
import Room from "../models/Room"

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

export const findAllHotel = async (req: any, res: express.Response, next: express.NextFunction) =>{
    const { min, max, ...others } = req.query;
    try{
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: { $gt: min | 1 , $lt: max || 999},
        }).limit(req.query.limit)
        res.status(200).json(hotels)
    }catch(err){
        next(err)
    }
}

export const countByCity = async (req: any, res: express.Response, next: express.NextFunction) =>{
    const cities =  req.query.cities.split(",")
    try{
        const list  = await Promise.all(cities.map((city: any)=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    }catch(err){
        next(err)
    }
}

export const countByType = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });

  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
}

export const getHotelRooms = async (req: express.Request, res: express.Response, next: express.NextFunction) =>{
    try{
        const hotel: any =  await Hotel.findById(req.params.id)
        const list = await  Promise.all(hotel.rooms.map((room: any) =>{
            return Room.findById(room)
        }))
        res.status(200).json(list)
    }catch(err){
        next(err)
    }
}


