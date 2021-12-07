import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CustomButton, { IButtonProps } from './index'

describe('Button', () => {
  const onClickAction = jest.fn()
  const expectedProps: IButtonProps = { text: 'button test', type: 'button' }

  test('should render the Button Component', async () => {
    const { getByText } = render(<CustomButton {...expectedProps} />)
    expect(getByText('button test')).toBeTruthy()
  })
})
