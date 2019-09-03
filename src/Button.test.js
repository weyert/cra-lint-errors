import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {

  test('should render button', async () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Welcome to React</Button>)
    expect(getByText('Welcome to React')).toBeInTheDocument()
    userEvent.click(getByText('Welcome to React'))
    expect(onClick).toHaveBeenCalled()
  })

  test.only('should dispatch button', async () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Welcome to React</Button>)
    expect(getByText('Welcome to React')).toBeInTheDocument()
    userEvent.click(getByText('Welcome to React'))
    expect(onClick).toHaveBeenCalled()
  })
})