import { DataTypes, Model,  } from "sequelize";
import slug from "slug";
import db from "../config/db";


class Proyecto extends Model {
     nombre!: string;
     url!: string;

}

Proyecto.init(
    {
        nombre: {
            type: DataTypes.STRING,
        },

        url: {
            type: DataTypes.STRING,
        },
    },
    {
      sequelize : db,
      modelName: "Proyecto",
      hooks: {
                  beforeCreate(d) {
                    const url: string = slug(d.nombre).toLocaleLowerCase();
                    d.url = url;
                      
                  },
              },
    },
)
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

export default Proyecto;
