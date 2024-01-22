import { useUser } from '@supabase/auth-helpers-react'
import Link from 'next/link'

export function Top() {
    const user = useUser()
    return(<div className="navbar">
        <div className="hidden sm:block sm:navbar-start">
            <Link href="/" className="btn btn-ghost text-xl font-extrabold">dameDatos</Link>
        </div>
        <div className="navbar-center">
            <input type="text" placeholder="Buscar" className="input input-bordered"/>
        </div>
        <div className="navbar-end">
            {user ? (<div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn btn-circle text-xl font-extrabold">gF</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box gap-2">
                        <li role="button" className="btn">Perfil</li>
                        <li role="button" className="btn" onClick={() => signOut()}>Salir</li>
                    </ul>
                </div>) : <Link href="/auth" className="btn btn-primary text-xl font-extrabold">Sumate!</Link>
            }
        </div>
    </div>)   
}