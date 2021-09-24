import { DataTypes } from "sequelize";
import db from '../config/db';

const Proyecto = db.define('proyectos', {
    
    
    nombre : {
        type : DataTypes.STRING
    },

    url : {
        type : DataTypes.STRING
    }
})


export default Proyecto 