import React, { FC, useState } from 'react'
import {
  HomeSearchContainerStyle, HomeSearchBannerStyle, HomeSearchFormStyle, HomeSearchTextStyle, BaseTyping,
} from './index.style'
import { IMAGES_URL } from '../../../shared/utils/constants'
import CustomButton from '../../../shared/components/custom-button'
import GeneralForm from '../../../shared/components/general-form'

export interface IHomeSearchProps {
  onChangeSearch: (event: { target: HTMLInputElement; }) => void
  onSubmitSearch: () => void
  value: string
}

const HomeSearch : FC <IHomeSearchProps> = ({ onChangeSearch, onSubmitSearch, value }) => {
  const onSubmitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onSubmitSearch()
  }

  return (
    <>
      <HomeSearchContainerStyle>
        <HomeSearchBannerStyle>
          <img src={IMAGES_URL.SEARCH_BANNER} alt="banner" />
        </HomeSearchBannerStyle>
        <HomeSearchFormStyle>
          <HomeSearchTextStyle>
            <span>
              <b>Hey ! Welcome </b> to
            </span>
            <BaseTyping> React JS Test Assignment</BaseTyping>
          </HomeSearchTextStyle>
          <GeneralForm onSubmit={onSubmitForm}>
            <label htmlFor="login">Login</label>
            <input type="text" name="login" id="login" onChange={onChangeSearch} value={value} />
            <CustomButton type="submit" text="Submit" />
          </GeneralForm>
        </HomeSearchFormStyle>
      </HomeSearchContainerStyle>
    </>
  )
}

export default HomeSearch
