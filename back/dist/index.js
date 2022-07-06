"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.con = void 0;
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const mysql = __importStar(require("mysql"));
const routes_1 = require("./routes");
// import { setToken } from './secret'
// setToken()
const con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    multipleStatements: false
});
exports.con = con;
const app = express_1.default();
app.use(express_1.default.json());
app.all(["*"], (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Database Connected!");
});
app.use(routes_1.routes);
app.listen(process.env.PORT, () => {
    console.log(`started on https://localhost:${process.env.PORT}`);
});
// CREATE USER 'pi'@'192.168.1.' IDENTIFIED BY 'davis';
// GRANT ALL PRIVILEGES ON . TO 'pi'@'%';
// FLUSH PRIVILEGES;
