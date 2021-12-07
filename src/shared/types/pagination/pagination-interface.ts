import React from 'react'

export interface Pagination {
    currentPage : number,
    totalPages: number,
    onPageChangeEvent: (pageNumber: number) => void,
    setCurrentTotalItems: React.Dispatch<React.SetStateAction<number>>
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
