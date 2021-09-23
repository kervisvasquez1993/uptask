import {Sequelize}  from 'sequelize'

const db = new Sequelize('upTask', "root", "Kervisvasquez1993", {
    host : process.env.HOST,
    dialect : "mysql",
    
})
db.sync({alter: true})


export default db