"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectoStore = exports.proyectoIndex = void 0;
const proyectoIndex = (req, res) => {
    res.json({ data: "hola desde el controlador" });
};
exports.proyectoIndex = proyectoIndex;
const proyectoStore = (req, res) => {
    const { body } = req;
    const nombre = body.nombre;
    if (nombre.length <= 0) {
        return res.status(400).json({ data: "el nombre es requerido" });
    }
    res.json({
        data: "enviaste el formulario",
        body,
    });
};
exports.proyectoStore = proyectoStore;
//# sourceMappingURL=ProyectosController.js.map