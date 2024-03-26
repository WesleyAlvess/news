import styled from "styled-components";

export const ContainerCards = styled.div`
    width: 90%;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const HomeTopCard = styled.section`
    max-width: 80%;
    margin: 1rem auto;
`

export const HomeCards = styled.section`
    display: grid;
    grid-template-columns: repeat( 2, 1fr );
    grid-gap: 10px;
    max-width: 80%;
    margin: 0 auto;
`