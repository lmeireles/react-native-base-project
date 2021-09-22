import React, { createContext, memo, useContext, useState } from 'react'
import { ActivityIndicator, Modal } from 'react-native'
import { Box } from 'components/Box'
import { useTheme } from 'styled-components'

interface LoadingContextType {
  show: () => void
  hide: (async?: boolean) => Promise<void> | void
}
const nullCtxObj: LoadingContextType = {
  show: () => undefined,
  hide: () => undefined,
}

const LoadingProviderContext = createContext<LoadingContextType>(nullCtxObj)

export const useLoading = () => useContext(LoadingProviderContext)

const LoadingProvider = memo(({ children }) => {
  const theme = useTheme()
  const [visible, setVisible] = useState(false)

  const show = () => setVisible(true)

  const hide = (async?: boolean) => {
    setVisible(false)

    if (async) {
      return new Promise<void>(resolve => {
        const kill = setTimeout(() => {
          resolve()
          clearTimeout(kill)
        }, 1000)
      })
    }
  }

  return (
    <LoadingProviderContext.Provider value={{ show, hide }}>
      {children}
      <Modal visible={visible} animated transparent animationType="fade">
        <Box
          ph="view"
          position="absolutefill"
          alignItems="center"
          justifyContent="center"
          style={{ backgroundColor: '#DDDDDD77' }}
        >
          <Box
            width={40}
            height={40}
            color="white"
            radius={8}
            style={{ overflow: 'hidden', maxWidth: 430 }}
            shadow
            alignItems="center"
            justifyContent="center"
          >
            <ActivityIndicator color={theme.colors.primary} />
          </Box>
        </Box>
      </Modal>
    </LoadingProviderContext.Provider>
  )
})

export default LoadingProvider
