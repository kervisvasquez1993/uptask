import { Router } from "express";
import { check } from "express-validator";
import { tareaUpdate } from '../Controllers/TareaController';

import { validarCampos } from "../middleware/validacion";

const router = Router();

router.patch('/:id', tareaUpdate);

export default router;
