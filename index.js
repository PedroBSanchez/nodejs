//const { Person } = require("./person");

const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect.js");

dotenv.config();
connectToDatabase();

//Importante deixar o expresss depois do dotenv, pois variáveis de ambiente são "carregadas" depois dela
require("./modules/express");

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
