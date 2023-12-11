import dbConnect from '../../../lib/dbConnect'
import Materia from '../../../models/materia'

export default async function handler(req, res) {
    const { nombre } = req.query
    await dbConnect()
    try {
        const materia = await Materia.find({nombre: nombre})
        res.status(200).json({ success: true, data: materia })
    } catch (e) {
        res.status(400).json({ success: false })
    }
}