export function Left({ userId }) {
    return(<div className="flex flex-col px-3 max-w-xs">
        <h1 className="text-3xl font-bold mb-3 px-3">misMaterias</h1>
        <ul className="flex sm:flex-col overflow-scroll gap-1">
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
            <Materia/>
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