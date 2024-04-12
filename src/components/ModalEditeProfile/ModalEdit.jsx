import React, { useContext } from 'react'
// import styles
import { Form, ModalContainer, ModalContent, SpanClose } from './ModalEditeStyle'

// import icons
import { IoCloseCircleOutline } from "react-icons/io5"

import { UserContext } from "../../Context/UserContext"

// import useForm
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateDataUser } from '../../services/userServices'

const ModalEdit = ({ handleEditModalOpenClose }) => {
    // useContext
    const { user, setUser } = useContext(UserContext)

    // Inicializando o hook useForm
    const { register, handleSubmit, reset } = useForm()

    // Envio do form
    const onSubmit = async (data) => {
        try {
            const response = await updateDataUser(data, user)
            setUser(response.data)
            reset()// reseta o formulário
            handleEditModalOpenClose()// fecha o modal 
        
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <ModalContainer>
            <ModalContent>
                <h2>Editar Usuário</h2>
                <SpanClose onClick={handleEditModalOpenClose}><IoCloseCircleOutline /></SpanClose>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        defaultValue={user.name}
                        {...register("name")}
                        type="text"
                        name='name'
                        placeholder='Name' />
                    <input
                        defaultValue={user.username}
                        {...register("username")}
                        type="text"
                        name='username'
                        placeholder='Username' />
                    <input
                        defaultValue={user.avatar}
                        {...register("avatar")}
                        type="text"
                        name='avatar'
                        placeholder='Avatar' />
                    <input
                        defaultValue={user.background}
                        {...register("background")}
                        type="text"
                        name='background'
                        placeholder='Background' />
                    <input
                        defaultValue={user.email}
                        {...register("email")}
                        type="email"
                        name='email'
                        placeholder='Email' />
                    <input
                        defaultValue={user.password}
                        {...register("password")}
                        type="password"
                        name='password'
                        placeholder='Password' />
                    <button type="submit">Atualizar</button>
                </Form>
            </ModalContent>
        </ModalContainer>
    )
}

export default ModalEdit
