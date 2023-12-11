import '../styles/globals.css';
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
    return (<>
        <Head><title>dameDatos</title></Head>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">dameDatos</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Buscar" className="input input-bordered w-25 me-3" />
                </div>
                <div tabIndex={0} role="button" className="dropdown dropdown-end">
                    <span className="btn btn-ghost text-xl">gF</span>
                    <ul tabIndex={0} className="mt-5 p-3 gap-3 shadow menu dropdown-content rounded-box w-20">
                        <li>Perfil</li>
                        <li>Salir</li>
                    </ul>
                </div>
            </div>
        </div>
        <Component {...pageProps} />
    </>)
}

export default MyApp