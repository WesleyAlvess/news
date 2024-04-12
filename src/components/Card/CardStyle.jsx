import styled from "styled-components";

export const SectionCard = styled.section`
    background-color: #fff;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    border: 1px solid #ece9e9;

    display: flex;

    @media (max-width: 1948px) {
        width: 300px;
        height: 450px;
        flex-direction: column;
    }
`

export const ContainerDeleteCard = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50%;
    padding: 2px;
    display: flex;
    align-items: center;
    color: #6D28D9;
    transition: .3s ease-in-out;

    &:hover{
        background-color: orangered;
        color: #fff;
    }

    svg{
        font-size: 1.3rem;
    }

    @media (max-width: 1948px) {
        top: 210px;
        right: 10px;

    }
`

export const Img = styled.img`
    width: 300px;
    height: 200px;
    background-size: cover;
`

export const ContainerText = styled.div`
    margin: 15px 20px;
    padding: 10px;


    h2{
        margin-bottom: .5rem;
    }
    
    button{
        position: absolute;
        bottom: 10px;
        padding: 5px 15px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #6D28D9;
        color: #fff;
        transition: .5s ease-in-out;

        &:hover{
            background-color: #4a218c;
        }
    }

`

export const ContainerIcon = styled.div`
position: absolute;
bottom: 12px;
right: 10px;
display: flex;
align-items: center;
justify-content: center;
`

export const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 10px;
gap: 2px;
`
