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

const Materia = new model('Materia', materiaSchema)

export default Materia