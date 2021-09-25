"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const slug_1 = __importDefault(require("slug"));
const db_1 = __importDefault(require("../config/db"));
class Proyecto extends sequelize_1.Model {
}
Proyecto.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: db_1.default,
    modelName: "Proyecto",
    hooks: {
        beforeCreate(d) {
            const url = (0, slug_1.default)(d.nombre).toLocaleLowerCase();
            d.url = url;
        },
    },
});
// const Proyecto = db.define(
//     "proyectos",
//     {
//         nombre: {
//             type: DataTypes.STRING,
//         },
//         url: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         hooks: {
//             beforeCreate(d) {
//                 const url: string = slug(d.nombre).toLocaleLowerCase();
//                 d.url = url;
//             },
//         },
//     }
// );
exports.default = Proyecto;
//# sourceMappingURL=Proyecto.js.map