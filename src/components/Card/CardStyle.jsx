import styled from "styled-components";

export const SectionCard = styled.section`
    max-width: 100%;
    border-radius: 5px;
    position: relative;
    background-color: #fff;
    border: 1px solid #ece9e9;
`

export const ContainerTextImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-right: 10px;
        padding-bottom: 15px;

        font-size: ${(props) => (props.top ? "1.3rem" : ".9rem")};
        
        h2{
            font-size: ${(props) => (props.top ? "3rem" : "1.4rem")};
        }
    }

    img{
        width: 40%;
        object-fit: cover;
        object-position: center;
        border-radius: 5px 0 0 5px;
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
