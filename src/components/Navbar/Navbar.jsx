// import icons
import { FaRegUserCircle } from 'react-icons/fa'
import { LiaNewspaper } from "react-icons/lia"
import { CiSearch } from "react-icons/ci"
import { useForm } from 'react-hook-form'

// import Link
import { Link } from 'react-router-dom'

// import styled components
import { Button, ContainerButton, ContainerInput, ContainerLogo, ContainerNavbar, Nav } from './NavbarStyled'


const Navbar = () => {
    const { register, handleSubmit, reset } = useForm()

    return (
        <Nav>
            <ContainerNavbar>
                <ContainerLogo to='/'>
                    <LiaNewspaper />
                    <span>News</span>
                </ContainerLogo>
                <form>
                    <ContainerInput>
                        <input type='text' placeholder='Pesquise por um título'/>
                        <CiSearch />
                    </ContainerInput>
                </form>
                <ContainerButton>
                    <Button>Entrar</Button>
                    <FaRegUserCircle />
                </ContainerButton>
            </ContainerNavbar>
        </Nav>
    )
}

export default Navbar

