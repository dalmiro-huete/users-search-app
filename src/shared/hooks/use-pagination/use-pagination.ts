import { FC, useEffect, useState } from 'react'
import { Pagination } from '../../types/pagination/pagination-interface'

export const usePagination = (itemsPerPage: number): Pagination => {
  const [currentTotalItems, setCurrentTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.ceil(currentTotalItems / itemsPerPage)

  const onPageChangeEvent = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return {
    currentPage, totalPages, onPageChangeEvent, setCurrentTotalItems, setCurrentPage,
  }
}
