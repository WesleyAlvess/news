import React, { useContext, useEffect, useState } from 'react'

// components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import ModalEdit from '../../components/ModalEditeProfile/ModalEdit'
import ModalCreate from "../../components/ModalCreatePost/ModalCreatePost"

// context
import { UserContext } from '../../Context/UserContext'

// styles
import { ProfileActions, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileEdit, ProfileHeader, ProfileIconAdd, ProfilePosts, ProfileUser } from './ProfileStyle'

// icons
import { FaRegEdit } from "react-icons/fa"
import { IoAddCircleOutline } from "react-icons/io5"
import { getAllPostsByUser } from '../../services/postsService'


const Profile = () => {
    // useContext
    const { user } = useContext(UserContext)
    // useState
    const [posts, setPosts] = useState([])
    // Modal open close Edit
    const [modalEditOpen, setModalEditOpen] = useState(false)
    // Modal open close Create
    const [modalCreateOpen, setModalCreateOpen] = useState(false)


    const findAllPostsByUser = async () => {
        const response = await getAllPostsByUser(user)
        setPosts(response.data.postsByUser)
    }

    useEffect(() => {
        findAllPostsByUser()
    }, [])

    // ModalEdit open close
    const handleEditModalOpenClose = () => {
        setModalEditOpen(!modalEditOpen)
    }

    // ModalCreate open close
    const handleCreateModalOpenClose = () => {
        setModalCreateOpen(!modalCreateOpen)
    }

    return (
        <>
            <Navbar />
            <ProfileContainer>
                <ProfileHeader>
                    <ProfileEdit value="Editar Perfil" onClick={handleEditModalOpenClose}>
                        <FaRegEdit />
                    </ProfileEdit>
                    <ProfileBackground src={user.background} alt="Background" />
                    <ProfileUser>
                        <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
                        <h2>{user.name?.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')}</h2>
                        <h3>@{user.username}</h3>
                    </ProfileUser>
                    <ProfileActions>
                        <ProfileIconAdd value="Adicionar Notícia" onClick={handleCreateModalOpenClose}>
                            <IoAddCircleOutline />
                        </ProfileIconAdd>
                    </ProfileActions>
                </ProfileHeader>
                <ProfilePosts>
                    {posts.length === 0 && <h3>Você ainda não criou nenhuma notícia...</h3>}

                    {posts.map((item) => (
                        <Card
                            key={item.id}
                            banner={item.banner}
                            comments={item.comments}
                            likes={item.likes}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </ProfilePosts>
            </ProfileContainer>
            <Footer />
            {/* ModalEditPost */}
            {modalEditOpen && (
                <ModalEdit handleEditModalOpenClose={handleEditModalOpenClose} />
            )}
            {/* ModalCreatePost */}
            {modalCreateOpen && (
                <ModalCreate
                    posts={posts}
                    setPosts={setPosts}
                    handleCreateModalOpenClose={handleCreateModalOpenClose}
                    title={posts.title}
                    banner={posts.banner}
                    text={posts.text}
                />
            )}
        </>
    )
}

export default Profile
