import 'tailwindcss/tailwind.css'

import React from 'react'
import type { AppProps } from 'next/app'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'

function App({
    Component,
    pageProps,
}: AppProps<{
    initialSession: Session
}>) {
    // suppress useLayoutEffect warnings when running outside a browser
    if (!process.browser) React.useLayoutEffect = React.useEffect

    // Create a new supabase browser client on every first render.
    const [supabaseClient] = useState(() => createPagesBrowserClient())

    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}>
            <Component {...pageProps} />
        </SessionContextProvider>
    )
}
export default App
