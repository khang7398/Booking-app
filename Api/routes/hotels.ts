import express, { Router } from 'express';
import { createHotel, deleteHotel, findAllHotel, findHotel, updateHotel } from '../controller/hotel';
import { verifyAdmin } from '../utils/verifyToken';

const router = express.Router();

//CREATE
router.post("/" ,verifyAdmin, createHotel)
    
//UPDATE
router.put("/:id" ,verifyAdmin, updateHotel)

//DELETE
router.delete("/:id" ,verifyAdmin, deleteHotel)

//GET
router.get("/:id" , findHotel)

//GET ALL
router.get("/" , findAllHotel)

export default router