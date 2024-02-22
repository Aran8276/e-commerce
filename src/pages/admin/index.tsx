import React from 'react'
import Header from '../components/Header'
import { useAuth } from '@/hooks/auth'
import Footer from '../components/Footer'
import AuthenticatedAdminLayout from './AuthenticatedAdminLayout'
import PageExceptionAlt from '@/components/Layouts/PageExceptionAlt'

function index() {
    const { user } = useAuth({ middleware: 'auth' })

    if (user) {
        if (user.isAdmin) {
            return (
                <div>
                    <Header currentNav='admin' />
                    <AuthenticatedAdminLayout />
                    <Footer currentNav='admin' />
                </div>
            )
        }
        else {
            /*Will be replaced by a proper Laravel Backend AuthorizationException*/
            return (
                <PageExceptionAlt code={403} message='THIS ACTION IS UNAUTHORIZED.' />
            )
        }
    }
    else {
        return (
            <></>
        )
    }
}

export default index
