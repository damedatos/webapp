import { getServerSession } from "next-auth";

export default function Verificar() {
    return(<div className="flex flex-col grow px-3 overflow-scroll gap-1">
        <h1 className="text-3xl font-bold mb-3 px-3">verificar</h1>
        <h3 className="text-xl font-bold my-2">¿Qué es la verificación?</h3>
        <a>Para que dameDatos siga siendo una fuente de información confiable, verificamos exclusivamente usuarios que son alumnos regulares de FCEyN UBA.</a>
        <h3 className="text-xl font-bold my-2">¿Qué es una "Constancia de Alumno Regular"?</h3>
        <a>Es un documento que incluye tu nombre y apellido, DNI, Nro. de legajo y a que carrera estás inscripto2.</a>
        <h3 className="text-xl font-bold my-2">¿Qué pasa con mi constancia de alumno regular?</h3>
        <a>Un humano va a leer la constancia y te va a verificar manualmente, esta verificación dura por siempre. <br/>Borramos las constancias todos los dias, para cuidar tu info.</a>
        <h3 className="text-xl font-bold my-2">¿Cómo me verifico?</h3>
        <ul className="steps steps-vertical">
            <li className="step"><a className="link link-primary" href="https://inscripciones.exactas.uba.ar/autogestion/solicitudes/nueva_solicitud">Entrá a autogestión.</a></li>
            <li className="step">Generá una Constancia de Alumno Regular.</li>
            <li className="step">
                <label className="form-control w-full max-w-xs">
                    <div className="label">Subila acá</div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </label>
            </li>
        </ul>
    </div>)
}