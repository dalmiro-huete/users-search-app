import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'

describe('Header', () => {
  test('should render Header', async () => {
    const { getByRole } = render(<Header />)
    expect(getByRole('img')).toBeTruthy()
  })
})
