import React, { FC } from 'react'
import { ButtonStyle } from './index.style'
import { ButtonType } from '../../types/button/button-type.type'

export interface IButtonProps {
   text: string
   type: ButtonType
}
const CustomButton : FC<IButtonProps> = ({ type, text }) => (
  <ButtonStyle
    type={type}
    value={text}
  />
)

export default CustomButton
