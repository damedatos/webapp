import '@/styles/globals.css';

import { Top } from'@/components/top'

import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
    return (<SessionProvider session={session}>
        <Head><title>dameDatos</title></Head>
        <div className="max-w-7xl h-screen flex flex-col mx-auto p-3">
            <Top/>
            <main role="main" className="flex grow flex-col sm:flex-row sm:overflow-hidden gap-3">
                <Component {...pageProps} />
            </main>
        </div>
    </SessionProvider>)
}

export default MyApp