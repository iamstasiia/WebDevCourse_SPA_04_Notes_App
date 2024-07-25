import { NoteModel } from "../models/note.model.js";

export const postNoteController = async (req, res, next) => {
    try {
        await NoteModel.create(req.body);

        res.status(200).json({
            code: 200,
            answer: req.body,
        });
    } catch (error) {
        next("DB Error");
    }
};
