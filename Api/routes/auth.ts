import express, { Router } from 'express';
import { login, register } from '../controller/auth';


const router = express.Router();


router.post("/register" , register)
router.post("/login" , login)

export default router