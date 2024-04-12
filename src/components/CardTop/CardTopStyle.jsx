import styled from "styled-components";

export const SectionCard = styled.section`
    background-color: #fff;
    width: 100%;
    height: 250px;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    border: 1px solid #6D28D9;

    display: flex;

    @media (max-width: 1050px) {
        width: 330px;
        height: 550px;
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
        top: 260px;
        right: 10px;

    }

`

export const Img = styled.img`
    background-color: aqua;
    width: 380px;
    height: 250px;
    background-size: cover;
`

export const ContainerText = styled.div`
    margin: 15px 20px;
    padding: 10px;


    font-size: 1.5rem;
    
    h2{
        font-size: 25.;
        margin-bottom: .5rem;
    }
    
    button{
        position: absolute;
        bottom: 25px;
        padding: 10px 25px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #6D28D9;
        color: #fff;
        transition: .5s ease-in-out;
        font-size: 15px;

        &:hover{
            background-color: #4a218c;
        }
    }

        
    @media (max-width: 1300px) {

        h2{
            font-size: 2rem;
        }

        button{
            bottom: 10px;
            font-size: 13px;
            padding: 5px 15px;
        }
    }

`

export const TextLimitPTag = styled.div`
    font-size: 1.3rem;

    @media (max-width: 1300px) {
        font-size: 1.2rem;
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
