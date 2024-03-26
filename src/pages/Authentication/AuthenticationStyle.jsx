// import styledComponents 
import styled from "styled-components";

export const AuthCOntainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
    
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    padding: 2rem;
    gap: 1rem;
    background-color: ${(props) => (props.type === "signin" ? "#6D28D9" : "#fff" )};
    color: ${(props) => (props.type === "signup" ? "#6D28D9" : "#fff" )};

    form{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        border-radius: 10px;
        padding: 20px;
        outline: none;
        width: 100%;
        font-size: 15px;
    }

    h2{
        font-size: 1.5;
        font-weight: 700;
        text-align: center;
    }
`

export const ButtonSignin = styled.button`
    font-weight: bold;
    outline: none;
    border: none;
    color: #6D28D9;
    font-size: 1rem;
    background-color: #fff;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 6px;
    cursor: pointer;

    &:hover{
        background-color: #5facfe;
        color: #ffffff;
        transition:.5s ease-in-out;
    }
`
export const ButtonSignup = styled.button`
    font-weight: bold;
    font-size: 1rem;
    outline: none;
    border: none;
    color: #fff;
    background-color: #6D28D9;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 6px;
    cursor: pointer;

    &:hover{
        background-color: #5facfe;
        color: #ffffff;
        transition:.5s ease-in-out;
    }
`

export const ErrorInput = styled.span`
    color: orangered;
    background-color: #f1c6c6;
    padding: .4rem;
    border-radius: 7px;
    font-weight: bold;
    display: flex;
    justify-content: center;
`