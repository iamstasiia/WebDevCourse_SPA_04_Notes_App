import { Router } from "express";
import {
    getNotesController,
    postNoteController,
} from "../controllers/note.controller.js";

export const NoteRouter = Router();

NoteRouter.post("/", postNoteController);
NoteRouter.get("/", getNotesController);
