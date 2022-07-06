"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const index_1 = require("./routes/lobby/index");
const routes = express_1.Router();
exports.routes = routes;
routes.use('/lobby', index_1.lobbyRouter);
