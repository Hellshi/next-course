import { screen } from '@testing-library/react'
import { RenderWithTheme } from '../../utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 column topics', () => {
    const { container } = RenderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Location/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Follow Us/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
