// import styled components
import styled from 'styled-components'
// import Link
import { Link } from 'react-router-dom'


export const Nav = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

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
    
    button{
        background-color: transparent;
        border: none;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        :hover{
            color: #6D28D9;
            transition: .5s ease-in-out;
        }

        &:hover::after {
        content: attr(value);
        position: absolute;
        top: 122%;
        left: 110%;
        transform: translateX(-50%);
        background-color: #6D28D9;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        white-space: nowrap;
        }
    }
`

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 15px;

      /* Icone */
    svg{
        font-size: 25px;
        cursor: pointer;
    }

    button{
        font-weight: bold;
        outline: none;
        border: none;
        color: #fff;
        background-color: #6D28D9;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 6px;
        cursor: pointer;

        &:hover{
            background-color: #4b2190;
            transition:.5s ease-in-out;
        }
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;

        :hover{
            color: #6D28D9;
            transition:.5s ease-in-out;
        }

        &:hover::after {
        content: attr(value);
        position: absolute;
        top: 130%;
        left: 100%;
        transform: translateX(-50%);
        background-color: #6D28D9;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        white-space: nowrap;
        }
    }
`

export const ErrorSpan = styled.span`
    background-color: #ffaeae;
    color: #9e0000;
    padding: 1rem;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
`
export const NameUserP = styled.p`
    font-weight: bold;
    color: #6D28D9;
`

export const LinkProfile = styled(Link)`
    text-decoration: none;
    list-style: none;
    color: #6D28D9;

    display: flex;
    align-items: center;
`