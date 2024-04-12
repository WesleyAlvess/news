import React, { useContext } from 'react'
// import styles
import { Form, ModalContainer, ModalContent, SpanClose } from './ModalCreatePostStyle'

// import icons
import { IoCloseCircleOutline } from "react-icons/io5"

// import useForm e zod
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// import component
import { createNew } from '../../services/postsService'

const ModalCreate = ({
    posts,
    setPosts,
    handleCreateModalOpenClose,
    title,
    banner,
    text
}) => {

    // Inicializando o hook useForm
    const { register, handleSubmit, reset } = useForm()

    // Envio do form
    const onSubmit = async (data) => {
        try {
            const response = await createNew(data)
            setPosts([...posts, response.data.post]) // atualizando o estado com o que tinha e o que vai entrar no banco
            reset()// reseta o formulário
            handleCreateModalOpenClose()// fecha o modal 

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <ModalContainer>
            <ModalContent>
                <h2>Publicar Notícia</h2>
                <SpanClose onClick={handleCreateModalOpenClose}><IoCloseCircleOutline /></SpanClose>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        defaultValue={title}
                        {...register("title")}
                        type="text"
                        name='title'
                        placeholder='Titulo' />
                    <input
                        defaultValue={banner}
                        {...register("banner")}
                        type="text"
                        name='banner'
                        placeholder='Banner' />
                    <textarea
                        defaultValue={text}
                        {...register("text")}
                        name='text'
                        placeholder='Texto da notícia'
                    ></textarea>
                    <button type="submit">Publicar</button>
                </Form>
            </ModalContent>
        </ModalContainer>
    )
}

export default ModalCreate
