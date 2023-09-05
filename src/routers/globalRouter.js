import express from "express";
import { join, login } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

// const handleHome = (req, res) => res.send("Home");
// const handleJoin = (req, res) => res.send("Join");

globalRouter.get("/", join);
globalRouter.get("/join", trending);
globalRouter.get("/login", login);


export default globalRouter;
