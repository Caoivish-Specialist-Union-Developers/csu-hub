require("dotenv").config();
import express from 'express';
import * as cors from 'cors';
import * as mysql from 'mysql';
import { routes } from './routes';
// import { setToken } from './secret'

// setToken()


const con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    multipleStatements: false
});

const app = express();





app.use(express.json());

app.all(["*"], (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});





con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});



app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`started on https://localhost:${process.env.PORT}`)
})

export { con as con, }

// CREATE USER 'pi'@'192.168.1.' IDENTIFIED BY 'davis';
// GRANT ALL PRIVILEGES ON . TO 'pi'@'%';
// FLUSH PRIVILEGES;