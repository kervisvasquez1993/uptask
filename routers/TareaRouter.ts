import { Router } from "express";
import { check } from "express-validator";
import { tareaDelete, tareaUpdate } from '../Controllers/TareaController';

import { validarCampos } from "../middleware/validacion";

const router = Router();

router.patch('/:id', tareaUpdate);

router.delete('/:id', tareaDelete);

export default router;
