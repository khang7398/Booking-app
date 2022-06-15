import express, { Router } from 'express';
import { createRoom, deleteRoom,  findAllRoom, findRoom, updateRoom, updateRoomAvailability } from '../controller/room';
import { verifyAdmin } from '../utils/verifyToken';


const router = express.Router();


//CREATE
router.post("/:hotelid" ,verifyAdmin, createRoom)
    
//UPDATE
router.put("/:id" ,verifyAdmin, updateRoom)
router.put("/availability/:id" ,  updateRoomAvailability)

//DELETE
router.delete("/:id/:hotelid" ,verifyAdmin, deleteRoom)

//GET
router.get("/:id" , findRoom)

//GET ALL
router.get("/" , findAllRoom)



export default router