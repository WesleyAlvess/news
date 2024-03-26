import React, { useContext, useEffect, useState } from 'react'

// components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'

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

    const findAllPostsByUser = async () => {
        const response = await getAllPostsByUser(user)
        setPosts(response.data.postsByUser)
        console.log(response.data.postsByUser)
    }

    useEffect(() => {
        findAllPostsByUser()
    }, [])

    return (
        <div>
            <Navbar />
            <ProfileContainer>
                <ProfileHeader>
                    <ProfileEdit>
                        <FaRegEdit />
                    </ProfileEdit>
                    <ProfileBackground src={user.background} alt="" />
                    <ProfileUser>
                        <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
                        <h2>{user.name?.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' ')}</h2>
                        <h3>@{user.username}</h3>
                    </ProfileUser>
                    <ProfileActions>
                        <ProfileIconAdd>
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
        </div>
    )
}

export default Profile
