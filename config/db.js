const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('upTakNode', 'root', 'Kervisvasquez1993', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
      timestamps: false
  },

  pool: {
      max:5,
      min:0,
      acquire: 30000,
      idle: 10000
  }
});

// Option 2: Passing a connection URI
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');