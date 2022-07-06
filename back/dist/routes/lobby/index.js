"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lobbyRouter = void 0;
const express_1 = require("express");
const lobbyRouter = express_1.Router();
exports.lobbyRouter = lobbyRouter;
lobbyRouter.get("/create", (req, res) => {
    res.send({ data: "New route created" });
});
