"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectoStore = exports.proyectoIndex = void 0;
const proyectoIndex = (req, res) => {
    res.json({ data: "hola desde el controlador" });
};
exports.proyectoIndex = proyectoIndex;
const proyectoStore = (req, res) => {
    const { body } = req;
    res.json({
        data: "enviaste el formulario",
        body
    });
};
exports.proyectoStore = proyectoStore;
//# sourceMappingURL=ProyectosController.js.map