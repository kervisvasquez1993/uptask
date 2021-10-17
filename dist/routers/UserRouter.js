"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const UserController_1 = require("../Controllers/UserController");
const validacion_1 = require("../middleware/validacion");
const router = (0, express_1.Router)();
// nuevo proyecto
router.post('/', [
    (0, express_validator_1.check)('email', "debe ingresar un correo valido").notEmpty().isEmail(),
    (0, express_validator_1.check)('password', "el password es obligatorio").notEmpty(),
    validacion_1.validarCampos,
], UserController_1.newUser);
router.post('/login', [
    (0, express_validator_1.check)('email', "debe ingresar un correo valido").notEmpty().isEmail(),
    (0, express_validator_1.check)('password', "el password es obligatorio").notEmpty(),
    validacion_1.validarCampos,
], UserController_1.login);
exports.default = router;
//# sourceMappingURL=UserRouter.js.map