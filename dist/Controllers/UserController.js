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
exports.login = exports.newUser = void 0;
const User_1 = __importDefault(require("../model/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const validarEmail = yield User_1.default.findOne({ where: { email } });
    if (validarEmail) {
        return res.json({ data: `el email ${email} ya esta en uso` });
    }
    // generar hash para la contraseña
    bcryptjs_1.default.hashSync(password, bcryptjs_1.default.genSaltSync(10));
    try {
        const newUser = yield User_1.default.create({ email, password });
    }
    catch (err) {
        throw new Error("No se registro registro en Base de dato");
    }
    res.json({ data: exports.newUser });
});
exports.newUser = newUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json("hola");
});
exports.login = login;
//# sourceMappingURL=UserController.js.map