import React from 'react'
import { HeaderContainerStyle } from './index.style'
import { IMAGES_URL } from '../../utils/constants'

const Header = () => (
  <HeaderContainerStyle>
    <img src={`${IMAGES_URL.WEBSITE_LOGO}`} alt="Website logo" />
  </HeaderContainerStyle>
)

export default Header
