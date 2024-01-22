import clientPromise from '@/lib/mongodb'

export default async function handler(req, res) {
    const { nombre } = req.query
    const materias = await clientPromise.db("test").collection("materias")
    try {
        const data = await materias.aggregate([
            {$search: {
                index: "nombre",
                text: {
                    query: nombre,
                    path: "nombre"
                }
            }}
        ])
        res.status(200).json({ success: true, data: data })
    } catch (e) {
        res.status(400).json({ success: false })
    }
}