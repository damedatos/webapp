import '@/styles/globals.css';

import { Right } from '@/components/right'
import { Left } from '@/components/left'
import { Top } from'@/components/top'

import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
    return (<div className="max-w-7xl h-screen flex flex-col mx-auto">
        <Head><title>dameDatos</title></Head>
        <Top/>
        <div className="flex grow flex-col sm:flex-row py-3 overflow-hidden">
            <Left/>
            <div className="flex grow flex-col sm:flex-row overflow-auto justify-center">
                <main role="main" className="grow">
                    <Component {...pageProps} />
                </main>
                <Right/>
            </div>
        </div>
    </div>)
}

export default MyApp