import styled from "styled-components";

export const SectionCard = styled.section`
    background-color: #fff;
    max-width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 20px;
    position: relative;
    border: 1px solid #ece9e9;

    display: flex;

    //Deixa o card responsivo
    @media (max-width: 768px) {
        width: 300px;
        height: 470px;

        display: flex;
        align-items: center;
        flex-direction: column;
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
