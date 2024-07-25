import { NoteModel } from "../models/note.model.js";

export const postNoteController = async (req, res, next) => {
    try {
        await NoteModel.create(req.body);

        res.status(201).json({
            code: 201,
            answer: req.body,
        });
    } catch (error) {
        next(error);
    }
};

export const getNotesController = async (req, res, next) => {
    try {
        const notes = await NoteModel.find({}); // Finds all notes

        res.status(200).json({
            code: 200,
            notes: notes,
        });
    } catch (error) {
        next(error);
    }
};
