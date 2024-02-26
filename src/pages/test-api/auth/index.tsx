import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const LoginPage = () => {
    const supabaseClient = useSupabaseClient()
    const user = useUser()
    const [data, setData]: any = useState()

    useEffect(() => {
        async function loadData() {
            const { data } = await supabaseClient
                .from('product_list')
                .select('*')
            setData(data)
        }
        // Only run query once user is logged in.
        if (user) loadData()
    }, [user])

    if (!user)
        return (
            <>
                <div>You're not logged in</div>
                <Link href="/login">Login </Link>
            </>
        )

    return (
        <>
            <button onClick={() => supabaseClient.auth.signOut()}>
                Sign out
            </button>
            <p>user:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <p>client-side data fetching with RLS</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}

export default LoginPage
