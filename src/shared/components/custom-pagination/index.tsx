import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'

export interface ICustomPagination {
  totalPages: number
  forcePage?: number
  onPageChange?: (event: any) => void
}

const CustomPagination: FC<ICustomPagination> = ({ totalPages, forcePage, onPageChange }) => (
  <ReactPaginate
    previousLabel="<"
    nextLabel=">"
    breakLabel="..."
    breakClassName="break-me"
    pageCount={totalPages}
    forcePage={forcePage}
    marginPagesDisplayed={1}
    pageRangeDisplayed={3}
    onPageChange={onPageChange}
    containerClassName="pagination"
    pageClassName="pagination__item"
    previousLinkClassName="pagination__link"
    nextLinkClassName="pagination__link"
    disabledClassName="pagination__link--disabled"
    activeClassName="pagination__link--active"
  />
)

export default CustomPagination
