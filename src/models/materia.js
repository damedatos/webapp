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
    score: Number,
    comentarios: [{type: Schema.Types.ObjectId, ref: 'Comentario'}],
    usuarios: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

export default mongoose.models.Materia || model('Materia', materiaSchema)