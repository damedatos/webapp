import { useSession, signIn, signOut } from 'next-auth/react'

export function Top() {
    const { data: session, status } = useSession()
    return(<div className="navbar">
        <div className="hidden sm:block sm:navbar-start">
            <a className="btn btn-ghost text-xl font-extrabold">dameDatos</a>
        </div>
        <div className="navbar-center">
            <input type="text" placeholder="Buscar" className="input input-bordered"/>
        </div>
        <div className="navbar-end"> 
            {session &&
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn btn-circle text-xl font-extrabold">gF</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box gap-2">
                    <li role="button" className="btn" onClick={() => signOut()}>Perfil</li>
                    <li role="button" className="btn">Salir</li>
                </ul>
            </div>}
            {!session &&
            <div tabIndex={0} role="button" className="btn text-xl font-extrabold" onClick={() => signIn()}>Sumate!</div>
            }
        </div>
    </div>)   
}