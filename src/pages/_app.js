import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
    return (<>
        <Head>
            <title>dameDatos</title>
        </Head>
        <div className="nav">
            <Link href="/">
                <img id="title" src="dD.png" width ="33" height="33"/>
            </Link>
        </div>
        <div className="wrapper grid">
        <Component {...pageProps} />
        </div>
    </>)
}

export default MyApp