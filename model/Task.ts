import { DataTypes, Model } from "sequelize";
import db from "../config/db";
import Proyecto from "./Proyecto";

class Task extends Model {}

Task.init(
    {
        name: {
            type: DataTypes.STRING(100),
        },
        status: {
            type: DataTypes.TINYINT,
        },
    },
    {
        sequelize: db,
        modelName: "task",
        hooks: {},
    }
);
Task.belongsTo(Proyecto)


export default Task;
