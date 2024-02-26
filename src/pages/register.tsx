import AuthCard from '@/components/AuthCard'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState, FormEventHandler } from 'react'
import Head from 'next/head'
import PrimaryButton from '@/components/PrimaryButton'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/router'

const Register = () => {
    const register = async (name: string, email: string, password: string) => {
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    display_name: name,
                },
            },
        })

        router.push('/')
    }

    const [name, setName]: any = useState('')
    const [email, setEmail]: any = useState('')
    const [password, setPassword]: any = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errors, setErrors]: any = useState([])
    const router = useRouter()
    const supabase = createPagesBrowserClient()

    const submitForm: FormEventHandler = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match!')
            return
        } else {
            register(name, email, password)
        }
    }

    return (
        <GuestLayout>
            <Head>
                <title>Laravel - Register</title>
            </Head>
            <AuthCard>
                <form onSubmit={submitForm}>
                    {/* Name */}
                    <div>
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    {/* Email Address */}
                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="passwordConfirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={confirmPassword}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setConfirmPassword(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href="/login"
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                            Already registered?
                        </Link>

                        <PrimaryButton className="ml-4">Register</PrimaryButton>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
