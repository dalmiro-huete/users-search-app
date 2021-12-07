import React, { useEffect } from 'react'
import { HeaderContainerStyle } from './index.style'
import { IMAGES_URL } from '../../utils/constants'

const Header = () => {
  useEffect(() => {
    document.title = 'Hey I\'m cool hire me ! '
  }, [])

  return (
    <HeaderContainerStyle>
      <img src={`${IMAGES_URL.WEBSITE_LOGO}`} alt="Website logo" />
    </HeaderContainerStyle>
  )
}

export default Header
