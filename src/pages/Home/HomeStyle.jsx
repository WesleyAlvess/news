import styled from "styled-components";

export const ContainerCards = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HomeTopCard = styled.section`
    max-width: 80%;
    display: flex;
    justify-content: center;
    margin: 1rem auto;
`

export const HomeCards = styled.section`
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    grid-gap: 8px;
    max-width: 80%;
    margin: 0 auto;
`