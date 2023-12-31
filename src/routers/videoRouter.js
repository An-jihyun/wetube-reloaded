import express from "express";
import { watch, getUpload, postUpload, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

// const handleWatch = (req, res) => res.send("Watch Video");
// const handleEdit = (req, res) => res.send("Edit Video");

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
//위 한 줄은 아래 두 줄과 같음
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
export default videoRouter;
