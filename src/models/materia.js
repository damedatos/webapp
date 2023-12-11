import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

const materiaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    cht: Number,
    tags: [String],
    dep: String,
    score: Number
})

export default mongoose.models.Materia || model('Materia', materiaSchema)