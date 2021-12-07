import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import GeneralForm from './index'

describe('General Form', () => {
  const generalFormOnClick = jest.fn()
  test('should render the General Form', async () => {
    const { getByText } = render(<GeneralForm onSubmit={generalFormOnClick}><span>test general form</span></GeneralForm>)
    expect(getByText('test general form')).toBeTruthy()
  })
})
