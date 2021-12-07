import React from 'react'
import toast from 'react-hot-toast'
import { Pagination } from '../../../shared/types/pagination/pagination-interface'
import User from '../../../shared/types/user/user.interface'

export interface IHomeBaseServiceConfigurator {
  pagination: Pagination
  setHomeSearch: React.Dispatch<React.SetStateAction<{login: string}>>
  setUsingPagination: React.Dispatch<React.SetStateAction<boolean>>
}

export const homeBaseService = ({ pagination: { setCurrentTotalItems, setCurrentPage, onPageChangeEvent }, setHomeSearch, setUsingPagination }: IHomeBaseServiceConfigurator) => {
  const gridOptions = (usingPagination: boolean) => ({
    retry: false,
    cacheTime: 0,
    enabled: usingPagination,
    onSuccess: (response: any) => {
      if (response !== null) {
        const { total_count } = response
        setCurrentTotalItems(total_count)
      }
    },
    onError: () => {
      toast.error('Something went wrong. Please try again.')
      setHomeSearch({ login: '' })
    },
  })

  const onSubmitSearch = (refetch: () => void) => async function () {
    await refetch()
    setCurrentPage(0)
  }

  const onPageChange = (event: any) => {
    onPageChangeEvent(event.selected)
    setUsingPagination(true)
  }
  return {
    gridOptions,
    onSubmitSearch,
    onPageChange,
  }
}

export const onUsersSort = (data: any, typeOfSort: boolean = true) => {
  const { items } = data

  const sortedArray = items.sort((userFirst: User, userSecond: User) => {
    if (userFirst.login.toLowerCase() > userSecond.login.toLowerCase()) return typeOfSort ? 1 : -1
    if (userFirst.login.toLowerCase() < userSecond.login.toLowerCase()) return typeOfSort ? -1 : 1
    return 0
  })

  return { items: [...sortedArray], ...data }
}
