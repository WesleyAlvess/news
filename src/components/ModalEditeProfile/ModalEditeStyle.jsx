import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background-color: rgba(0,0,0,0.6);
`

export const ModalContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    width: 400px;
    height: 400px;
    border-radius: 5px;

    h2{
        margin-bottom: 1rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    
    input{
        width: 80%;
        height: 35px;
        padding: 6px;
        outline: none;
        border: 1px solid #bfbbbb;
        border-radius: 10px;
        color: #767676;
    }

    button{
        font-weight: bold;
        font-size: 1rem;
        outline: none;
        border: none;
        color: #fff;
        background-color: #6D28D9;
        width: 80%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 6px;
        cursor: pointer;
        margin-top: 1rem;
        

        &:hover{
            background-color: #5facfe;
            color: #ffffff;
            transition:.5s ease-in-out;
        }   
    }
`

export const SpanClose = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;

    display: flex;
    align-items: center;
    border-radius: 50%;
    transition:.3s ease-in-out;
    color: #6D28D9;
    

    &:hover{
        background-color: #6D28D9;
        color: #fff;
    }

    svg{
        font-size: 30px;
    }

`