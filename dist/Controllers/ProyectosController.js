"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectoStore = exports.proyectoIndex = void 0;
const Proyecto_1 = __importDefault(require("../model/Proyecto"));
const proyectoIndex = (req, res) => {
    res.json({ data: "hola desde el controlador" });
};
exports.proyectoIndex = proyectoIndex;
const proyectoStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const nombre = body.nombre;
    if (nombre.length <= 0) {
        return res.status(400).json({ data: "el nombre es requerido" });
    }
    const proyecto = yield Proyecto_1.default.create(body);
    res.json({
        data: proyecto,
        body,
    });
});
exports.proyectoStore = proyectoStore;
//# sourceMappingURL=ProyectosController.js.map