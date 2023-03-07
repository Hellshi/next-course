import { RenderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    RenderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    RenderWithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render heading with a left line', () => {
    RenderWithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render bottom line', () => {
    RenderWithTheme(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
