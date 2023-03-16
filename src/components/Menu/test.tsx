import { RenderWithTheme } from '../../utils/tests/helpers'
import { render, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    RenderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
  })
})
