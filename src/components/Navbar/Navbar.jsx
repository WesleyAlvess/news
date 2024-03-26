import { useContext, useEffect, useState } from 'react'

// import icons
import { FaRegUserCircle } from 'react-icons/fa'
import { PiSignOutBold } from "react-icons/pi"
import { LiaNewspaper } from "react-icons/lia"
import { CiSearch } from "react-icons/ci"
import { useForm } from 'react-hook-form'

// import styled components
import { ContainerButton, ContainerInput, ContainerLogo, ContainerNavbar, ErrorSpan, LinkProfile, NameUserP, Nav } from './NavbarStyle'
import { UserContext } from '../../Context/UserContext'

// Navigate
import { Link, useNavigate } from 'react-router-dom'

// import zod
import { zodResolver } from '@hookform/resolvers/zod'
import { searchSchema } from '../../Schemas/searchSchema'
import { userLogged } from '../../services/userServices'

//import Cookies
import Cookies from 'js-cookie'

const Navbar = () => {
    // useStates
    const { user, setUser } = useContext(UserContext)

    // useForm
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema),
    })
    const navigate = useNavigate()

    const onSearch = (data) => {
        const { title } = data
        navigate(`/search/${title}`)
        reset()
    }

    const goAuth = () => {
        navigate('/auth')
    }

    const findUserLogged = async () => {
        try {
            const response = await userLogged()
            setUser(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const token = Cookies.get("token")
        if (token) {
            findUserLogged()
        }

    }, [])


    // Sair
    const signout = () => {
        Cookies.remove("token")
        localStorage.removeItem("token")
        setUser(null)
        navigate("/")
    }


    return (
        <>
            <Nav>
                <ContainerNavbar>
                    <ContainerLogo to='/'>
                        <LiaNewspaper />
                        <span>News</span>
                    </ContainerLogo>
                    <form onSubmit={handleSubmit(onSearch)}>
                        <ContainerInput>
                            <input {...register("title")} type='text' placeholder='Pesquise por um título' />
                            <button value='Pesquisar'><CiSearch /></button>
                        </ContainerInput>
                    </form>
                    <ContainerButton>
                        {user && user.name ? (
                            <ContainerButton>
                                <NameUserP>{user.name ? user.name.split(' ')[0].charAt(0).toUpperCase() + user.name.split(' ')[0].slice(1) : ""}</NameUserP>
                                <LinkProfile to="/profile">
                                    <img src={user.avatar} alt="" style={{ width: "35px", borderRadius: "50%", border: "2px solid #6D28D9" }} />
                                </LinkProfile>
                                <span onClick={signout} value='Sair' ><PiSignOutBold /></span>
                            </ContainerButton>
                        ) : (
                            <button onClick={goAuth}>Entrar</button>
                        )}
                        {/* <FaRegUserCircle /> */}
                    </ContainerButton>
                </ContainerNavbar>
            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
        </>
    )
}

export default Navbar

