const { Sequelize } = require('sequelize');
// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('node', 'root', 'Kervisvasquez1993', {
  host: 'localhost',
  dialect: 'mysql' 
});
module.exports = sequelize;