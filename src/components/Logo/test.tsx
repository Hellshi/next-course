import { RenderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the a white label by default', () => {
    // Step 1: Render component
    // Step 2: Select element to be tested using screen
    // Step 3: expect - assert - analysis
    RenderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render black when color is passed', () => {
    // Step 1: Render component
    // Step 2: Select element to be tested using screen
    // Step 3: expect - assert - analysis
    RenderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
