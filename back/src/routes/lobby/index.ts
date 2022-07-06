import { Router } from 'express';

const lobbyRouter = Router();

lobbyRouter.get("/create", (req, res) => {
    res.send({ data: "New route created" })
})

export { lobbyRouter }