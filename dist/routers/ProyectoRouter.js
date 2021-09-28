"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const ProyectosController_1 = require("../Controllers/ProyectosController");
const validacion_1 = require("../middleware/validacion");
const router = (0, express_1.Router)();
// nuevo proyecto
router.get("/", ProyectosController_1.proyectoIndex);
router.post("/", [
    (0, express_validator_1.check)("nombre", "El Nombre es obligatorio")
        .trim()
        .escape()
        .not()
        .isEmpty(),
    validacion_1.validarCampos,
], ProyectosController_1.proyectoStore);
router.get("/:url", ProyectosController_1.proyectoShow);
router.put("/:id", ProyectosController_1.proyectoUpdate);
router.delete("/:id", ProyectosController_1.proyectoDelete);
exports.default = router;
//# sourceMappingURL=ProyectoRouter.js.map