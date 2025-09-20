import { Router } from "express";
import { getLinks, createLink } from "../controllers/linkController.js";

const router = Router();

router.get("/", getLinks);
router.post("/", createLink);

export default router;
