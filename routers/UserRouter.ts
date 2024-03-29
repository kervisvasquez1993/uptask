import { Router } from "express";
import {check} from "express-validator";
import { login, newUser } from "../Controllers/UserController";
import { validarCampos } from "../middleware/validacion";


const router = Router();


// nuevo proyecto

router.post('/',[
    check('email', "debe ingresar un correo valido").notEmpty().isEmail(),
    check('password', "el password es obligatorio").notEmpty(),
    validarCampos,

], newUser);

 
router.post('/login',[
    check('email', "debe ingresar un correo valido").notEmpty().isEmail(),
    check('password', "el password es obligatorio").notEmpty(),
    validarCampos,

], login);


export default router;
