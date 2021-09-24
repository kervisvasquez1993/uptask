import { Router } from "express";
import { nosotrosIndex } from "../Controllers/ProyectosController";


const router = Router();


// nuevo proyecto
router.get("/", nosotrosIndex)



 

export default router;
