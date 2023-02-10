import theme from '../../styles/theme'
import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

export const RenderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
