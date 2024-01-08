import express, { Request, Response } from "express";
import Template from "../model/Template";
import upload from "../utils/Upload";

const router = express.Router();

// Get a Template
router.get("/", async (req: Request, res: Response) => {
  try {
    const template = await Template.findById(req.query.id);
    if (!template) {
      res.status(404).json("Not Found");
    }

    res.status(200).json(template);
  } catch (error) {
    console.log(error);
  }
});

// Get All Templates
router.get("/all", async (req: Request, res: Response) => {
  try {
    const templates = await Template.find();
    if (!templates) {
      res.status(404).json("Not Found");
    }
    res.status(200).json(templates);
  } catch (error) {
    console.log(error);
  }
});

// Post Templates
router.post("/", upload.single("image"), async (req, res) => {
  const { title, template, tags } = req.body;
  const filePath = req.file?.path;

  try {
    const templateDB = new Template({
      title,
      image: filePath,
      template,
      tags,
    });
    await templateDB.save();
    res.status(200).json("Template Saved!");
  } catch (error) {
    console.log(error);
  }
});

export default router;
