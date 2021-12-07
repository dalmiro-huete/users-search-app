import { renderHook, act } from '@testing-library/react-hooks'
import { render, screen } from '@testing-library/react'

import React from 'react'
import { usePagination } from './use-pagination'

describe('Use Pagination', () => {
  test('should render the usePagination custom hook', async () => {
    const { result } = renderHook(() => usePagination(40))

    await act(async () => {
      render(<h1>{result.current.totalPages}</h1>)
    })
    expect(screen.getByText('0')).toBeTruthy()
  })

  test('should change the currentPage when the onPageChangeEvent function is call', async () => {
    const { result } = renderHook(() => usePagination(20))

    act(() => {
      result.current.onPageChangeEvent(3)
    })
    const { getByText } = render(<h1>{result.current.currentPage}</h1>)
    expect(getByText('3')).toBeTruthy()
  })
})
