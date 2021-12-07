import React, { FC, useState } from 'react'
import {
  HomeSearchContainerStyle, HomeSearchBannerStyle, HomeSearchFormStyle, HomeSearchTextStyle,
} from './index.style'
import { IMAGES_URL } from '../../../shared/utils/constants'
import CustomButton from '../../../shared/components/button'
import GeneralForm from '../../../shared/components/general-form'

export interface IHomeSearchProps {
  onChangeSearch: (event: any) => void
  onSubmitSearch: (event?: any) => void
  value: string
}

const HomeSearch : FC <IHomeSearchProps> = ({ onChangeSearch, onSubmitSearch, value }) => (
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
          React JS Test Assignment
        </HomeSearchTextStyle>
        <GeneralForm>
          <label htmlFor="login">Login</label>
          <input type="text" name="login" id="login" onChange={onChangeSearch} value={value} />
          <CustomButton type="button" text="Submit" onClickAction={onSubmitSearch} />
        </GeneralForm>
      </HomeSearchFormStyle>
    </HomeSearchContainerStyle>
  </>
)

export default HomeSearch
