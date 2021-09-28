import { Router } from "express";
import { check } from "express-validator";
import { tareaIndex, tareaStore } from '../Controllers/TareaController';

import { validarCampos } from "../middleware/validacion";

const router = Router();

// nuevo proyecto

router.get('/:url', tareaIndex);
router.post('/:url', tareaStore);

export default router;
