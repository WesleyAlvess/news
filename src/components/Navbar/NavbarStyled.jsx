// import styled components
import styled from 'styled-components'
// import Link
import { Link } from 'react-router-dom'


export const Nav = styled.nav`
    max-width: 100%;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #ece9e9;
`
export const ContainerNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 90%;
    margin: 0 auto;
    height: 70px;
`
export const ContainerLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6D28D9;
    color: #fff;
    padding: 4px;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    text-decoration: none;

      /* Icone */
    svg{
        font-size: 30px;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    input {
        border: 1px solid #bfbbbb;
        border-radius: 10px;
        padding: 6px;
        outline: none;
        width: 200px;
        color: #726f6f;
        width: 100%;
        padding-left: 10px;
        font-size: 15px;

        &:focus {
            border: 1px solid #6D28D9;
        }

    } 
    
    /* Icone */
    svg{
            font-size: 25px;
            cursor: pointer;
        }

`

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 15px;

      /* Icone */
    svg{
        font-size: 25px;
        cursor: pointer;
    }
`

export const Button = styled.div`
    font-weight: bold;
    color: #fff;
    background-color: #6D28D9;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 4px;
    cursor: pointer;

    &:hover {
        background-color: #5e35a0;
    }

`
