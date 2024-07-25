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

export const updateNoteController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedNote = await NoteModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if (!updatedNote) {
            return res
                .status(404)
                .json({ code: 404, answer: "Note not found" });
        }

        res.status(200).json({
            code: 200,
            answer: updatedNote,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteNoteController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedNote = await NoteModel.findByIdAndDelete(id);

        if (!deletedNote) {
            return res
                .status(404)
                .json({ code: 404, answer: "Note not found" });
        }

        res.status(200).json({
            code: 200,
            answer: "Note deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};
