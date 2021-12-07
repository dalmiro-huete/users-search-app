import React from 'react'
import { render } from '@testing-library/react'
import CustomPagination from './custom-pagination'

describe('CustomPagination', () => {
  test('should render CustomPagination', async () => {
    const { getByLabelText } = render(<CustomPagination totalPages={2} />)
    expect(getByLabelText('Page 1 is your current page')).toBeTruthy()
  })
})
