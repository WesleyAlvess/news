// import styled Components
import styled from "styled-components";

export const ContainerResults = styled.div`
    width: 90%;
    margin: 1rem auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`
export const TextResults = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 5px;

    h2{
        color: #6D28D9;
    }
`

export const SearchCards = styled.div`
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    grid-gap: 10px;
    max-width: 80%;
    margin: 0 auto;
`