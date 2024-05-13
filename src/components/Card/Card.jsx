import { useContext } from "react"

// import icons
import { BiLike } from "react-icons/bi"
import { AiOutlineMessage } from "react-icons/ai"
import { TextLimit } from "../TextLimit"

// import icons
import { RiDeleteBinLine } from "react-icons/ri"

// import styled-components
import { ContainerIcon, ContainerText, Icon, Img, SectionCard } from "./CardStyle"

// import components
import { deleteNewService } from "../../services/postsService"

// import useContext
import { UserContext } from "../../Context/UserContext"

const Card = (props) => {
    // useContext
    const { user, setUser } = useContext(UserContext)

    const deleteNew = async () => {
        try {
            const response = await deleteNewService(props)
            console.log(response);
        } catch (error) {

        }
    }


    return (
        <SectionCard>
            <Img src={props.banner} />
            <ContainerText top={props.top}>
                <h2>{props.title}</h2>
                <TextLimit text={props.text} limit={150}></TextLimit>
                <button>Ler mais</button>
            </ContainerText>
            <ContainerIcon >
                <Icon>
                    <BiLike />
                    <span>{props.likes?.length}</span>
                </Icon>
                <Icon>
                    <AiOutlineMessage />
                    <span>{props.comments?.length}</span>
                </Icon>
            </ContainerIcon>
        </SectionCard>
    )
}

export default Card
