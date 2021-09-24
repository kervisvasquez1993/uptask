"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Proyecto = db_1.default.define('proyectos', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Proyecto;
//# sourceMappingURL=Proyecto.js.map