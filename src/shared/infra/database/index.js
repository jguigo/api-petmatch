require('dotenv').config();
const Sequelize = require('sequelize');

let db = {};

try {
  db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      dialect: process.env.DB_DIALECT,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    },
  );
} catch (error) {
  console.error('Error ao tentar uma conexão com banco dados');
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log('Banco dados conectado!');
  } catch (error) {
    console.error('Erro ao tentar se conectar ao banco de dados1');
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;
