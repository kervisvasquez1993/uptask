"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProyectosController_1 = require("../Controllers/ProyectosController");
const router = (0, express_1.Router)();
// nuevo proyecto
router.get("/", ProyectosController_1.proyectoIndex);
router.post("/", ProyectosController_1.proyectoStore);
exports.default = router;
//# sourceMappingURL=ProyectoRouter.js.map