import { Router } from "express";
import { check } from "express-validator";
import {
    proyectoIndex,
    proyectoShow,
    proyectoStore,
    proyectoUpdate,
} from "../Controllers/ProyectosController";
import { validarCampos } from "../middleware/validacion";

const router = Router();

// nuevo proyecto
router.get("/", proyectoIndex);
router.post(
    "/",
    [
        check("nombre", "El Nombre es obligatorio").trim().escape().not().isEmpty(),
        validarCampos,
    ],
    proyectoStore
);
router.get("/:url", proyectoShow);

router.put("/:id", proyectoUpdate);

export default router;
