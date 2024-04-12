import styled, { keyframes } from "styled-components";

// Loading Spinner
const rotate =  keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const ContainerALl = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ContainerCards = styled.div`
    min-height: 100vh;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const HomeTopCard = styled.section`
    max-width: 80%;
    margin: 1rem auto;

    @media (max-width: 768px) {
        max-width: 100%;
    }
    
`

export const HomeCards = styled.section`
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    grid-gap: 10px;
    max-width: 80%;
    margin: 0 auto;
    
    @media (max-width: 1948px) {
        grid-template-columns: repeat( 4, 1fr );
    }
    @media (max-width: 1724px) {
        grid-template-columns: repeat( 3, 1fr );
    }
    @media (max-width: 1300px) {
        grid-template-columns: repeat( 2, 1fr );
    }
    @media (max-width: 1050px) {
        grid-template-columns: repeat( 1, 1fr );
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
    }
`

export const ContainerSpinnerLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    svg {
        font-size: 50px;
        color: #6D28D9;
        animation: ${rotate} 2s linear infinite;

    }
`

export const NoNewsFound = styled.p`
    grid-column: 1 / -1;
    color: #6D28D9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-top: 200px;
`