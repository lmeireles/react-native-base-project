import React, { memo } from 'react'
import { Platform, StatusBar } from 'react-native'
import * as styledComponents from 'styled-components/native'
import { DefaultTheme } from 'styled-components'

import { loadTheme } from 'shared/theme'

const { ThemeProvider: StyledThemeProvider } =
  styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>

const ThemeProvider = memo(({ children }) => {
  StatusBar.setBarStyle(
    Platform.OS === 'ios' ? 'dark-content' : 'light-content'
  )

  // You can use custom calls to external services to update you theme here
  const theme = loadTheme({})

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
})

export default ThemeProvider
