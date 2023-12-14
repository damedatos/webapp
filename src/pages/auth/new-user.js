import clientPromise from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]'

export async function getServerSideProps(ctx) {
    const session = await getServerSession(ctx.req, ctx.res, authOptions)
    const users = await clientPromise.then(client => client.db("test").collection("users"))
    const user = await users.findOne({_id: session.user.id})
    return { props: { user: JSON.parse(JSON.stringify(user)) } }
}


async function handleOnChange(e, id) {
    return
}

export default function Verificar({ user }) {
    return <div className="flex flex-col grow overflow-scroll gap-1">
        <h1>Verificación</h1>
        <h3>¿Qué es la verificación?</h3>
        <a>Para que dameDatos siga siendo una fuente de información confiable, verificamos exclusivamente usuarios que son alumnos regulares de FCEyN UBA.</a>
        <h3>¿Qué es una "Constancia de Alumno Regular"?</h3>
        <a>Es un documento que incluye tu nombre y apellido, DNI, nro. de legajo y a que carrera estás inscripto.</a>
        <h3>¿Qué pasa con mi constancia de alumno regular?</h3>
        <a>Un moderador va a leer la constancia y te va a verificar manualmente, esta verificación dura por siempre. Solo guardamos las constancias hasta que las leemos, para cuidar tu info.</a>
        <h3>¿Cómo me verifico?</h3>
        <ul className="steps steps-vertical">
            <li className={user?.verificacion ? "step step-primary" : "step"}><a className="link link-primary" href="https://inscripciones.exactas.uba.ar/autogestion/solicitudes/nueva_solicitud">Entrá a autogestión.</a></li>
            <li className={user?.verificacion ? "step step-primary" : "step"}>Generá una Constancia de Alumno Regular.</li>
            <li className={user?.verificacion ? "step step-primary" : "step"}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">Subila acá:</div>
                    <input type="file" onChange={(e) => handleOnChange(e, user.id)} accept=".pdf" className="file-input file-input-bordered w-full max-w-xs" />
                </label>
            </li>
            <li className={user?.verificacion == "verificado" ? "step step-primary" : "step"}>Un moderador te verifica.</li>
        </ul>
    </div>
}