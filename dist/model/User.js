"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const Proyecto_1 = __importDefault(require("./Proyecto"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class User extends sequelize_1.Model {
}
User.init({
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: {
            name: true,
            msg: "el usuario ya esta registradoi"
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
}, {
    sequelize: db_1.default,
    modelName: "user",
    hooks: {
        beforeCreate(u) {
            u.password = bcryptjs_1.default.hashSync(u.password, bcryptjs_1.default.genSaltSync(10));
        }
    },
});
User.hasMany(Proyecto_1.default);
exports.default = User;
//# sourceMappingURL=User.js.map