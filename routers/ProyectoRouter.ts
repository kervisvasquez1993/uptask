import { Router } from "express";
import {  proyectoIndex, proyectoStore } from "../Controllers/ProyectosController";


const router = Router();


// nuevo proyecto
router.get("/", proyectoIndex)
router.post("/", proyectoStore)



 

export default router;
