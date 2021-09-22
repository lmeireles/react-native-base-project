import React, { FC, ReactElement } from 'react'
import { render, RenderAPI, RenderOptions } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'


import { loadTheme } from 'shared/theme'

const theme = loadTheme()

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: RenderOptions): RenderAPI =>
  render(ui, { wrapper: AllTheProviders, ...(options || {}) })

export const snapshot = (element: RenderAPI): void => {
  expect(element.toJSON()).toMatchSnapshot()
}

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
