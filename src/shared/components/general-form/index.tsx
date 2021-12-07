import React, { FC } from 'react'
import { GeneralFormStyle } from './index.style'

interface GeneralFormProps {
    children: React.ReactNode
    onSubmit: (event: { preventDefault: () => void }) => void
}

const GeneralForm: FC<GeneralFormProps> = ({ children, onSubmit }) => (
  <GeneralFormStyle onSubmit={onSubmit}>
    {children}
  </GeneralFormStyle>
)

export default GeneralForm
