import { DataTypes, Model } from "sequelize";
import db from "../config/db";
import Proyecto from "./Proyecto";
import bcryptjs from "bcryptjs";

class User extends Model {
    email?: string;
    password?: string;
}

User.init(
    {
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: {
                args: true,
                msg: "el usuario ya esta registradoi",
            },
            validate: {
                notEmpty: {
                    msg: "El email no puede ir vacio",
                },
            },
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "El Password no puede ir vacio",
                },
            },
        },
    },
    {
        sequelize: db,
        modelName: "user",
        hooks: {
            beforeCreate(u) {
                u.password = bcryptjs.hashSync(
                    u.password,
                    bcryptjs.genSaltSync(10)
                );
            },
        },
    }
);
User.hasMany(Proyecto);

export default User;
