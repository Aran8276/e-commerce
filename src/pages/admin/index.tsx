import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { useAuth } from '@/hooks/auth'
import Footer from '../../components/Footer'
import AuthenticatedAdminLayout from './AuthenticatedAdminLayout'
import PageExceptionAlt from '@/components/Layouts/PageExceptionAlt'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

function index() {
    const user = useUser()
    const router = useRouter()

    if (user) {
        if (user) {
            return (
                <div>
                    <Header currentNav="admin" />
                    <AuthenticatedAdminLayout />
                    <Footer currentNav="admin" />
                </div>
            )
        } else {
            /*Will be replaced by a proper Laravel Backend AuthorizationException*/
            return (
                <PageExceptionAlt
                    code={403}
                    message="THIS ACTION IS UNAUTHORIZED."
                />
            )
        }
    } else {
        return useEffect(() => {
            router.push('/login')
        }, [])
    }
}

export default index
