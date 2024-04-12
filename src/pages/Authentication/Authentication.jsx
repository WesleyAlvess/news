import React from 'react'
import { AuthCOntainer, ButtonSignin, ButtonSignup, ErrorInput, Section } from './AuthenticationStyle'

// import components
import Input from '../../components/Input/Input'

// import useForm
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// import schema cosumo de api
import { signinSchema } from '../../Schemas/signinSchema'
import { signupSchema } from '../../Schemas/signupSchema'
import { signin, signup } from '../../services/userServices'

// import js-cookie
import Cookies from 'js-cookie'

// import useNavigate 
import { useNavigate } from 'react-router-dom'

const Authentication = () => {
    // useNavigate
    const navigate = useNavigate()

    // UseForm com Zod Signup
    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        reset: resetSignup,
        formState: { errors: errorSignup } } = useForm({
            resolver: zodResolver(signupSchema),
        })

    // UseForm com Zod Signin
    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        reset: resetSignin,
        formState: { errors: errorSignin } } = useForm({
            resolver: zodResolver(signinSchema),
        })

    const inHandleSubmit = async (data) => {
        try {
            const response = await signin(data)
            const token = response.data
            Cookies.set("token", token, { expires: 2 })
            console.log(response);
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }

    const upHandleSubmit = async (data) => {
        try {
            const response = await signup(data)
            Cookies.set("token", response.data, { expires: 2 })
            navigate("/")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <AuthCOntainer>
            <Section type="signin" >
                <h2>Entrar</h2>
                <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                    <Input
                        register={registerSignin}
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    {/* MessageErro */}
                    {errorSignin.email && <ErrorInput>{errorSignin.email.message}</ErrorInput>}
                    <Input
                        register={registerSignin}
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    {/* Messagerro */}
                    {errorSignin.password && <ErrorInput>{errorSignin.password.message}</ErrorInput>}
                    <ButtonSignin type="submit">Entrar</ButtonSignin>
                </form>
            </Section>
            <Section type="signup">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                    <Input
                        register={registerSignup}
                        type="text"
                        placeholder="Nome"
                        name="name"
                    />
                    {errorSignup.name && <ErrorInput>{errorSignup.name.message}</ErrorInput>}
                    <Input
                        register={registerSignup}
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    {errorSignup.email && <ErrorInput>{errorSignup.email.message}</ErrorInput>}
                    <Input
                        register={registerSignup}
                        type="password"
                        placeholder="Senha"
                        name="password"
                    />
                    {errorSignup.password && <ErrorInput>{errorSignup.password.message}</ErrorInput>}
                    <Input
                        register={registerSignup}
                        type="password"
                        placeholder="Confirmar senha"
                        name="confirmPassword"
                    />
                    {errorSignup.confirmPassword && <ErrorInput>{errorSignup.confirmPassword.message}</ErrorInput>}
                    <ButtonSignup type="submit">Cadastrar</ButtonSignup>
                </form>
            </Section>
        </AuthCOntainer>
    )
}

export default Authentication

