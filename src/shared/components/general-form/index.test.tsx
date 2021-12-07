import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import GeneralForm from './index'

describe('General Form', () => {
  test('should render the General Form', async () => {
    const { getByText } = render(<GeneralForm><span>test general form</span></GeneralForm>)
    expect(getByText('test general form')).toBeTruthy()
  })
})
