import { DataTypes, Model } from "sequelize";

import db from "../config/db";

class Task extends Model {}

Task.init(
    {
        name: {
            type: DataTypes.STRING(100),
        },
        status : {
            type : DataTypes.STRING,
        }
    },
    {
        sequelize: db,
        modelName: "task",
        hooks: {},
    }
);


export default Task;

