export function Left({ userId }) {
    return(<div class="w-fixed px-3">
        <div class="sticky top-0 rounded-xl w-full h-full">
            <Nav/>
            <ul class="flex sm:flex-col overflow-hidden content-center">
                <Materia/>
            </ul>
        </div>
    </div>)
}

function Nav({ userId }) {
    return(<div className="navbar">
        <div tabIndex={0} role="button" className="dropdown dropdown-end">
            <span className="btn btn-ghost rounded-full text-xl">gF</span>
            <ul tabIndex={0} className="z-[1] menu dropdown-content rounded-box shadow mt-3 p-3 gap-3 w-20">
                <li>Perfil</li>
                <li>Salir</li>
            </ul>
        </div>
        <div className="form-control me-3">
            <input type="text" placeholder="Buscar" className="input input-bordered"/>
        </div>
    </div>)   
}

function Materia({ materiaId }) {
    return(<li className="card card-bordered">
        <div className="card-body">
            <h3 className="text-slate-500">supratitulo</h3>
            <h2 className="card-title">
                Materia
                <div className="badge badge-primary">Sugerida</div>
            </h2>
            <p>informacion sobre la materia</p>
        </div>
    </li>)
}