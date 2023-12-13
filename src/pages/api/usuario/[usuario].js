import dbConnect from '../../../lib/dbConnect'
import Materia from '../../../models/materia'

export default async function handler(req, res) {
    const { nombre } = req.query
    await dbConnect()
    try {
        const materias = await Materia.aggregate([
            {$search: {
                index: "nombre",
                text: {
                    query: nombre,
                    path: "nombre"
                }
            }}
        ])
        res.status(200).json({ success: true, data: materias })
    } catch (e) {
        res.status(400).json({ success: false })
    }
}