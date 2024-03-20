// import icons
import { BiLike } from "react-icons/bi"
import { AiOutlineMessage } from "react-icons/ai"
import { TextLimit } from "../TextLimit"

// import styled-components
import { ContainerIcon, ContainerTextImg, Icon, SectionCard } from "./CardStyle"

const Card = (props) => {


    return (
        <SectionCard>
            <ContainerTextImg top={props.top}>
                <img src={props.banner} />
                <div>
                    <h2>{props.title}</h2>
                    <TextLimit text={props.text} limit={150}></TextLimit>
                </div>
            </ContainerTextImg>
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
