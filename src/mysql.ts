var mysql = require("mysql2")

const banco = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    port: 5000,
    database: 'Bicentenario',
    waitForConnections: true,
    connectionLimit: 10
})
export default banco
banco.execute(`
    CREATE DATABASE IF NOT EXISTS Bicentenario;
`)
banco.execute(`
    CREATE TABLE IF NOT EXISTS cadastro(
    email VARCHAR(50) NOT NULL,
    nome VARCHAR(50) NOT NULL
    );
`)
