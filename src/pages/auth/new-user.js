import { getServerSession } from "next-auth";

export default function Verificar() {
    return(<div className="flex flex-col grow overflow-scroll gap-1">
        <h1>Verificación</h1>
        <h3>¿Qué es la verificación?</h3>
        <a>Para que dameDatos siga siendo una fuente de información confiable, verificamos exclusivamente usuarios que son alumnos regulares de FCEyN UBA.</a>
        <h3>¿Qué es una "Constancia de Alumno Regular"?</h3>
        <a>Es un documento que incluye tu nombre y apellido, DNI, nro. de legajo y a que carrera estás inscripto.</a>
        <h3>¿Qué pasa con mi constancia de alumno regular?</h3>
        <a>Un humano va a leer la constancia y te va a verificar manualmente, esta verificación dura por siempre. Borramos las constancias todos los dias, para cuidar tu info.</a>
        <h3>¿Cómo me verifico?</h3>
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