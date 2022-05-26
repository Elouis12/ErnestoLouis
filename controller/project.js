const { db } = require("../config/db");


// get projects
const getProjects = async (req, resp) => {


    const sql =
        `
        SELECT * FROM projects ORDER BY RAND();
    `

    // await db.connect();

    await db.query( sql, ( err, result )=>{

        if( err ){

            throw err;

        }else{

            resp.json( result );
        }
    } );

}


module.exports = { getProjects }