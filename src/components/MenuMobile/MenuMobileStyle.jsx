// import styled components
import styled, { keyframes } from 'styled-components';
// import Link
import { Link } from 'react-router-dom'

// animation
const fade = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const MenuIcon = styled.div`
    svg{
        position: absolute;
        top: 22px;
        right: 15px;
        font-size: 27px;
        color: #6D28D9;
    }

    @media (min-width: 1050px) {
        display: none;
    }

`

export const ContainerNavbar = styled.div`
        width: 300px;
        border-radius: 10px 0 10px 10px;
        position: absolute;
        background-color: #c0a6e7;
        top: 45px;
        right: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        gap: 10px;
        animation: ${fade} 0.5s ease-in-out forwards;
        
        span{
            margin-left: 150px;
        }

        form{
            @media (max-width: 1049px) {
                margin: 0 auto;
            }
        }

        @media (min-width: 1049px) {
                display: none;
            }

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

    &:hover::after {
    content: attr(value);
    position: absolute;
    top: 85%;
    left: 93.5%;
    transform: translateX(-50%);
    background-color: #6D28D9;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    white-space: nowrap;
    }

    @media (max-width: 1049px) {       
        &:hover::after {
        content: attr(value);
        position: absolute;
        top: 55%;
        left: 45%;
        z-index: 1;
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
