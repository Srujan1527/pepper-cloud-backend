import express from "express";
import {
  getForm,
  uploadForm,
  getAllForms,
  updateForm,
  deleteForm,
} from "./controller";

const router = express.Router();

router.post("/getForm", getForm);
router.get("/getAllForms", getAllForms);

router.post("/upload", uploadForm);
router.put("/update", updateForm);
router.delete("/delete", deleteForm);

export default router;
