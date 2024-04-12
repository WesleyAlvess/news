// import styled components
import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    background-color: #fff;
    color: black;
    font-weight: bold;
    text-align: center;
    max-width: 100%;
    max-height: 100%;

    div{
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;

        p {
            font-weight: 600;

            span{
                color: #6D28D9;
            }
        }
    }
`