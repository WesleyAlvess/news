import React from 'react'

// import style
import { InputSpace } from './InputStyle'

const Input = ({ type, placeholder, name, register }) => {
    return (
        <InputSpace type={type} placeholder={placeholder} {...register(name)} />
    )
}

export default Input
