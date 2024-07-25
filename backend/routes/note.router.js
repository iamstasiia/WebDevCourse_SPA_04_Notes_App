import { Router } from "express";
import {
    deleteNoteController,
    getNotesController,
    postNoteController,
    updateNoteController,
} from "../controllers/note.controller.js";

export const NoteRouter = Router();

NoteRouter.post("/", postNoteController);
NoteRouter.get("/", getNotesController);
NoteRouter.put("/:id", updateNoteController);
NoteRouter.delete("/:id", deleteNoteController);
