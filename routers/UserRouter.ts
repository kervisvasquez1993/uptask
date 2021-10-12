import { Router } from "express";
import {check} from "express-validator";
import { newUser } from "../Controllers/UserController";
import { validarCampos } from "../middleware/validacion";


const router = Router();


// nuevo proyecto

router.post('/',[
    check('email', "debe ingresar un correo valido").notEmpty().isEmail(),
    check('password', "el password es obligatorio").notEmpty(),
    validarCampos,

], newUser);

 

export default router;
