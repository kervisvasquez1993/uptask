import { Router } from "express";
import { check } from "express-validator";
import { tareaIndex } from "../Controllers/TareaController";

import { validarCampos } from "../middleware/validacion";

const router = Router();

// nuevo proyecto

router.get('/', tareaIndex);

export default router;
