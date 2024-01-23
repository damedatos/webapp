export function Left({materias}) {
    const renderedMaterias = materias.map(m => <Materia materia={m} key={m.id}/>)
    return(<div className="flex flex-col sm:max-w-xs">
        <h1>misMaterias</h1>
        <ul className="flex sm:flex-col overflow-scroll gap-1">
            {renderedMaterias}
        </ul>
    </div>)
}

function Materia({ materia }) {
    return(<li className="card card-bordered">
        <div className="card-body">
            <div className="badge badge-primary">Sugerida</div>
            <h3 className="text-slate-500">CHT: 130</h3>
            <h2 className="card-title">
                Materia con nombre super mega largo
            </h2>
            <p>informacion sobre la materia</p>
        </div>
    </li>)
}