import express, { Router } from 'express';
import { deleteUser, findAllUser, findUser, updateUser } from '../controller/user';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken';


const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req: express.Request,res: express.Response,next: express.NextFunction)=>{
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req: express.Request,res: express.Response,next: express.NextFunction)=>{
//     res.send("hello user, you are logged in an you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req: express.Request,res: express.Response,next: express.NextFunction)=>{
//     res.send("hello admin, you are logged in an you can delete all account")
// })



    
//UPDATE
router.put("/:id" , verifyUser, updateUser)

//DELETE
router.delete("/:id" ,verifyUser, deleteUser)

//GET
router.get("/:id" ,verifyUser, findUser)

//GET ALL
router.get("/" ,verifyAdmin,  findAllUser)

export default router