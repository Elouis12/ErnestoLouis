const mysql = require("mysql");
const dotEnv = require("dotenv");
dotEnv.config();

/*const db = () => {

    try{

        mysql.createConnection({

            host : process.env.HOST,
            user : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
        });

        mysql.connect();


    }catch (e) {

        console.log(e);
    }

}*/

const db = mysql.createConnection( {

    host: 'localhost'/*process.env.HOST*/,
    user: 'ernesto'/*process.env.USER*/,
    password: '1234567'/*process.env.PASSWORD*/,
    database: 'portfolio'/*process.env.DATABASE*/
} );

module.exports = { db };