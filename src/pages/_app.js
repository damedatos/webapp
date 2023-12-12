import '@/styles/globals.css';

import { Right } from '@/components/right'
import { Left } from '@/components/left'
import { Top } from'@/components/top'

import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
    return (<>
        <Head><title>dameDatos</title></Head>
        <Top/>
        <div class="w-full flex flex-col sm:flex-row py-3 justify-between">
            <Left/>
            <main role="main" className="min-w-7xl mx-3">
                <Component {...pageProps} />
            </main>
            <Right/>
        </div>
    </>)
}

export default MyApp