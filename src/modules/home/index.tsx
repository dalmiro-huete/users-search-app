import React, {
  FC, useEffect, useRef, useState,
} from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useQuery } from 'react-query'
import '../../shared/styles/custom-pagination.scss'
import HomeSearch from '../../components/home/home-search'
import { HomeContainerStyle } from './index.style'
import { queryGetUsers } from '../../shared/queries/user/query'
import HomeResults from '../../components/home/home-results'
import { USERS_PER_PAGE_SIZE } from '../../shared/utils/constants'
import { usePagination } from '../../shared/hooks/use-pagination/use-pagination'
import { homeBaseService } from './utils/helper'
import CustomPagination from '../../shared/components/custom-pagination'

interface HomeProps {
}

const Home : FC<HomeProps> = () => {
  const [usingPagination, setUsingPagination] = useState(false)
  const homeResultsRef = useRef<HTMLInputElement>(null)
  const [homeSearch, setHomeSearch] = useState({
    login: '',
  })
  const pagination = usePagination(
    USERS_PER_PAGE_SIZE,
  )
  const {
    gridOptions, onSubmitSearch, onPageChange,
  } = homeBaseService({ pagination, setUsingPagination, setHomeSearch })
  const {
    currentPage, onPageChangeEvent, totalPages,
  } = pagination

  const {
    data, refetch, isFetching,
  } = useQuery(
    [currentPage],
    () => queryGetUsers({
      q: homeSearch.login,
      per_page: USERS_PER_PAGE_SIZE,
      page: currentPage,
    }), gridOptions(usingPagination),
  )

  useEffect(() => {
    if (homeResultsRef.current)homeResultsRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [data])

  const onChangeSearch = (event: { target: HTMLInputElement; }) => {
    setUsingPagination(false)
    const { target: { value, name } } = event

    setHomeSearch({
      ...homeSearch,
      [name]: value,
    })
  }

  return (
    <HomeContainerStyle>
      <HomeSearch onChangeSearch={onChangeSearch} onSubmitSearch={onSubmitSearch(refetch)} value={homeSearch.login} />
      { (data || isFetching) && (
      <HomeResults
        data={data}
        render={() => (
          <CustomPagination totalPages={totalPages} onPageChange={onPageChange} forcePage={currentPage} />
        )}
        ref={homeResultsRef}
      />
      ) }
      <Toaster />
    </HomeContainerStyle>
  )
}

export default Home
