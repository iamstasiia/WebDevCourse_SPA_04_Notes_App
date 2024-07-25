import { Router } from "express";
import { postNoteController } from "../controllers/note.controller.js";

export const NoteRouter = Router();

NoteRouter.post("/", postNoteController);
