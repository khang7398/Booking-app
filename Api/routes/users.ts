import express, { Router } from 'express';
import { deleteUser, findAllUser, findUser, updateUser } from '../controller/user';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken';


const router = express.Router();

//UPDATE
router.put("/:id" , verifyUser, updateUser)


//DELETE
router.delete("/:id" ,verifyUser, deleteUser)

//GET
router.get("/:id" ,verifyUser, findUser)

//GET ALL
router.get("/" ,verifyAdmin,  findAllUser)

export default router