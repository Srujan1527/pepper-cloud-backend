import express from "express";
import { getForm, uploadForm, getAllForms } from "./controller";

const router = express.Router();

router.get("/getForm", getForm);
router.get("/getAllForms", getAllForms);

router.post("/upload", uploadForm);

export default router;
