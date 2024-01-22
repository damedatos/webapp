import '@/styles/globals.css';

import Head from 'next/head'
import { Top } from'@/components/top'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
    const [supabaseClient] = useState(() => createPagesBrowserClient())
    return (<SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
        <Head><title>dameDatos</title></Head>
        <div className="max-w-7xl h-screen flex flex-col mx-auto p-3">
            <Top/>
            <main role="main" className="flex grow flex-col sm:flex-row sm:overflow-hidden gap-3">
                <Component {...pageProps} />
            </main>
        </div>
    </SessionContextProvider>)
}

export default MyApp