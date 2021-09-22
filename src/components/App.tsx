import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { I18nProvider } from 'providers/I18nProvider'
import ThemeProvider from 'providers/ThemeProvider'
import MainNavigation from 'views/MainNavigation'
import LoadingProvider from 'providers/LoadingProvider'
import AlertProvider from 'providers/AlertProvider'

const App: FC = () => (
  <ThemeProvider>
    <I18nProvider>
      <LoadingProvider>
        <AlertProvider>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </AlertProvider>
      </LoadingProvider>
    </I18nProvider>
  </ThemeProvider>
)

export default App
