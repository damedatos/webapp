import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI
let cached = global.mongoose

export default async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        cached.promise = mongoose.connect(uri).then(mongoose => mongoose)
    }
    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null
        throw e
    }
    return cached.conn
}