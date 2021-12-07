import React, { FC } from 'react'
import { ButtonStyle } from './index.style'
import { ButtonType } from '../../types/button/button-type.type'

export interface IButtonProps {
   text: string
   type: ButtonType
   onClickAction ? : (event? : any) => void
}
const CustomButton : FC<IButtonProps> = ({ type, onClickAction, text }) => (
  <ButtonStyle type={type} onClick={onClickAction}>{text}</ButtonStyle>
)

export default CustomButton
