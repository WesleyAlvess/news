// import icons
import { BiLike } from "react-icons/bi"
import { AiOutlineMessage } from "react-icons/ai"
import { TextLimit } from "../TextLimit"

// import icons
import { RiDeleteBinLine } from "react-icons/ri"

// import styled-components
import { ContainerDeleteCard, ContainerIcon, ContainerText, Icon, Img, SectionCard, TextLimitPTag } from "./CardTopStyle"

const CardTop = (props) => {


    return (
        <SectionCard>
            <ContainerDeleteCard>
                <RiDeleteBinLine />
            </ContainerDeleteCard>
            <Img src={props.banner} />
            <ContainerText top={props.top}>
                <h2>{props.title}</h2>
                <TextLimitPTag><TextLimit text={props.text} limit={150}></TextLimit></TextLimitPTag>
                
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

export default CardTop
