import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    title: String,
    text: String,
    // creation_date: String,
    // edition_date: String,
});

export const NoteModel = model("Note", noteSchema, "notes");
