import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: [String, String],
        required: true
    },
    email: String,
    image: String,
    emailVerified: null | Date,
    iniciales: {
        type: String,
        required: true,
        maxLength: 2
    },
    comentarios: [{type: Schema.Types.ObjectId, ref: 'Comentario'}],
    materias: [{type: Schema.Types.ObjectId, ref: 'Materia'}]
})

export default mongoose.models.User || model('User', userSchema)