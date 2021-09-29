import { Router } from "express";
import { check } from "express-validator";
import {
    proyectoDelete,
    proyectoIndex,
    proyectoShow,
    proyectoStore,
    proyectoUpdate,
    
} from "../Controllers/ProyectosController";
import { tareaIndex, tareaProyecto } from "../Controllers/TareaController";
import { validarCampos } from "../middleware/validacion";

const router = Router();

// nuevo proyecto
router.get("/", proyectoIndex);
router.post(
    "/",
    [
        check("nombre", "El Nombre es obligatorio")
            .trim()
            .escape()
            .not()
            .isEmpty(),
        validarCampos,
    ],
    proyectoStore
);
router.get("/:url", proyectoShow);

router.put("/:id", proyectoUpdate);
router.delete("/:id", proyectoDelete);
// creacion de proyecto tarea asociaa a un proyecto
router.post("/:url/tareas",
[
    check("name", "El Nombre es obligatorio").notEmpty(),
    validarCampos
],
tareaProyecto);

router.get('/:url/tareas', tareaIndex);

export default router;
