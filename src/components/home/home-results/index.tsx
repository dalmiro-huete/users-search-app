import React, { forwardRef, useEffect, useState } from 'react'
import {
  HomeResultsContainerStyle, HomeResultTableStyle, HomeResultsTextStyle, ErrorRowText, SortButtonStyle,
} from './index.style'
import User from '../../../shared/types/user/user.interface'
import { LOADING_MESSAGE, NOT_USERS_MESSAGE } from './utils/constants'
import { onUsersSort } from '../../../modules/home/utils/helper'
import { PaginatedRequest } from '../../../shared/types/pagination/paginated-request.interface'

export interface IHomeResultsProps {
    data? : PaginatedRequest<User>
    render(): void
}

export const HomeResults = React.forwardRef<HTMLInputElement, IHomeResultsProps>(
  ({ data, render }, ref) => {
    const [homeResults, setHomeResults] = useState<Array<User>>([])
    const [sortResults, setSortResults] = useState(false)

    useEffect(() => {
      if (data) setHomeResults(data.items)
    }, [data])

    return (
      <HomeResultsContainerStyle id="HomeResultsContainer" ref={ref}>
        <HomeResultsTextStyle>
          <span>
            <b>Ohh yes! </b> This is working.
          </span>
          here are the user results
        </HomeResultsTextStyle>
        {render()}
        <HomeResultTableStyle>
          <tr>
            <th>Avatar URL</th>
            <th>Login
              <SortButtonStyle
                type="button"
                onClick={() => {
                  setHomeResults(onUsersSort(data, sortResults).items)
                  setSortResults((prevState) => !prevState)
                }}
              >| sort
              </SortButtonStyle>
            </th>
            <th>Type</th>
          </tr>
          {
              homeResults ? (
                homeResults.length > 1 ? (homeResults.map(({ avatar_url, login, type }) => (
                  <tr>
                    <td><a href={avatar_url} target="_blank" rel="noreferrer">{avatar_url}</a></td>
                    <td>{login}</td>
                    <td>{type}</td>
                  </tr>
                ))) : (
                  <tr>
                    <td colSpan={4}><ErrorRowText>{NOT_USERS_MESSAGE}</ErrorRowText></td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan={4}><ErrorRowText>{LOADING_MESSAGE}</ErrorRowText></td>
                </tr>
              )
                  }
        </HomeResultTableStyle>
      </HomeResultsContainerStyle>
    )
  },
)

export default HomeResults
