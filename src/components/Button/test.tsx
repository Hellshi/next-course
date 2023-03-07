import { RenderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the mid size button by default', () => {
    RenderWithTheme(<Button> Buy Now </Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the small size button', () => {
    RenderWithTheme(<Button size="small"> Buy Now </Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size button', () => {
    RenderWithTheme(<Button size="large"> Buy Now </Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.0rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a full width button', () => {
    RenderWithTheme(
      <Button size="large" fullWidth>
        {' '}
        Buy Now{' '}
      </Button>
    )

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })
})
