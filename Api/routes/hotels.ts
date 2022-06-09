import express, { Router } from 'express';
import { countByCity, countByType, createHotel, deleteHotel, findAllHotel, findHotel, updateHotel } from '../controller/hotel';
import { verifyAdmin } from '../utils/verifyToken';

const router = express.Router();

//CREATE
router.post("/" ,verifyAdmin, createHotel)
    
//UPDATE
router.put("/:id" ,verifyAdmin, updateHotel)

//DELETE
router.delete("/:id" ,verifyAdmin, deleteHotel)

//GET
router.get("/find/:id" , findHotel)

//GET ALL
router.get("/" , findAllHotel)
router.get("/countByCity" , countByCity)
router.get("/countByType" , countByType)

export default router