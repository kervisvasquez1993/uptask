"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('upTask', "root", "Kervisvasquez1993", {
    host: process.env.HOST,
    dialect: "mysql",
});
db.sync({ alter: true });
exports.default = db;
//# sourceMappingURL=db.js.map