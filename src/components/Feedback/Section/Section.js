import React from "react"
import {Title, Thumb} from "./Section.styled"
const Section = ({title,children})=>{
    return(
       <Thumb>
            <Title>{title}</Title>
            {children}
            </Thumb>
    )
}

export default Section;