import styled from "styled-components";

// Section Header
export const ProfileContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`

export const ProfileHeader = styled.div`
    position: relative;
    background-color: #fff;
    width: 80%;
    margin: 1rem auto;
    border-radius: 0.3rem 0.3rem 0 0;
    z-index: 1;
`

export const ProfileEdit = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    color: #6D28D9;
    background-color: #fff;
    padding: .5rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;

    display: flex;
    align-items: center;

    
    &:hover{
        background-color: #6D28D9;
        transition: .3s ease-in-out;
        color: #fff;
    }

    svg{
        font-size: 1.3rem;
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

`

export const ProfileBackground = styled.img`
    position: absolute;
    width: 100%;
    height: 60%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: center;
    border-radius: 0.3rem 0.3rem 0 0;
    z-index: -1;
`

export const ProfileUser = styled.div`
    padding: 1rem;

    h2{
        font-size: 22px;
        font-weight: bold;
    }

    h3{
        font-size: 13px;
        font-weight: 500;
    }

`
export const ProfileAvatar = styled.img`
    width: 120px;
    border-radius: 50%;
    border: 2px solid #c4c3c3;
    object-fit: cover;
    object-position: center;
    z-index: 4;
`
export const ProfileActions = styled.div`
    position: absolute;
    bottom: 15px;
    right: 13px;
`
export const ProfileIconAdd = styled.div`
    color: #6D28D9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    
    &:hover{
        background-color: #6D28D9;
        transition: .3s ease-in-out;
        color: #fff;
    }

    svg{
        font-size: 2rem;
    }

    &:hover::after {
    content: attr(value);
    position: absolute;
    top: 130%;
    left: 120%;
    transform: translateX(-50%);
    background-color: #6D28D9;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    white-space: nowrap;
    }

`
// Section posts

export const ProfilePosts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin: 1rem auto;
    width: 80%;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    

    h3{
        grid-column: 1 / -1;
        text-align: center;
        color: #6D28D9;
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 1rem;
    }
`
