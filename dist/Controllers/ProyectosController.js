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
exports.proyectoDelete = exports.proyectoUpdate = exports.proyectoShow = exports.proyectoStore = exports.proyectoIndex = void 0;
const Proyecto_1 = __importDefault(require("../model/Proyecto"));
const proyectoIndex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const proyecto = yield Proyecto_1.default.findAll();
    res.json({ data: proyecto });
});
exports.proyectoIndex = proyectoIndex;
const proyectoStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    // const nombre: string = body.nombre;
    // const url:string = slug(nombre).toLocaleLowerCase()
    const proyecto = yield Proyecto_1.default.findOne({ where: { nombre: body.nombre } });
    if (proyecto) {
        return res.status(400).json({
            data: `ya existe un proyecto con el nombre : ${body.nombre}`,
        });
    }
    const proyectoSave = yield Proyecto_1.default.create(body);
    res.json({
        data: proyectoSave,
    });
});
exports.proyectoStore = proyectoStore;
const proyectoShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = req.params.url;
        const urlParams = yield Proyecto_1.default.findOne({ where: { url } });
        if (!urlParams) {
            return res.json({ data: `No existe url asociada a ${url}` });
        }
        res.json({ data: urlParams });
    }
    catch (error) {
        throw error;
    }
});
exports.proyectoShow = proyectoShow;
const proyectoUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const idParam = yield Proyecto_1.default.findByPk(id);
        if (!idParam) {
            return res
                .status(404)
                .json({ data: `No existe proyecto asociado al id${id}` });
        }
        yield idParam.update(body);
        res.json({ data: idParam });
    }
    catch (error) {
        throw error;
    }
});
exports.proyectoUpdate = proyectoUpdate;
const proyectoDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const proyecto = yield Proyecto_1.default.findByPk(req.params.id);
        if (!proyecto) {
            return res.status(404).json({
                data: `No existe proyecto asociado al id ${req.params.id}`,
            });
        }
        yield proyecto.destroy();
        res.json({ data: proyecto });
    }
    catch (error) {
        throw error;
    }
});
exports.proyectoDelete = proyectoDelete;
//# sourceMappingURL=ProyectosController.js.map