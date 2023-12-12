export function Top({ userId }) {
    return(<div className="navbar p-3">
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl font-extrabold">dameDatos</a>
        </div>
        <div className="navbar-center">
            <input type="text" placeholder="Buscar" className="input input-bordered"/>
        </div>
        <div className="navbar-end">
            <div tabIndex={0} role="button" className="dropdown dropdown-end">
                <span className="btn btn-ghost rounded-full text-xl font-extrabold">gF</span>
                <ul tabIndex={0} className="z-[1] bg-neutral-100 menu dropdown-content rounded-box shadow mt-3 p-3 gap-3 w-20">
                    <li>Perfil</li>
                    <li>Salir</li>
                </ul>
            </div>
        </div>
    </div>)   
}