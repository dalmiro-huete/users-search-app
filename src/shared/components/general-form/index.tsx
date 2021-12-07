import React, { FC } from 'react'
import { GeneralFormStyle } from './index.style'

interface GeneralFormProps {
    children: React.ReactNode
}

const GeneralForm: FC<GeneralFormProps> = ({ children }) => (
  <GeneralFormStyle>
    {children}
  </GeneralFormStyle>
)

export default GeneralForm
