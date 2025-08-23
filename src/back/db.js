import mysql from 'mysql2'; //Criação do db.js, conexão com o banco;

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    
    database: 'tccsistema'
})

connection.connect((error) => {
    if (error) {
        console.error("Erro ao tentar se conectar com o banco de dados", error)
    } else {
        console.log("Conectado ao banco com de dados com sucesso!")
    }
})

export default connection;