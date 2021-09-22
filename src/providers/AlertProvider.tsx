import React, { createContext, memo, useContext, useState } from 'react'
import { Modal } from 'react-native'
import Button from '../components/Button'
import { Box } from 'components/Box'
import { Text } from 'components/Text'

interface AlertShowConfig {
  title?: string
  confirmLabel?: string
  onConfirm?: () => void
}

interface AlertConfirmConfig extends AlertShowConfig {
  cancelLabel?: string
  onCancel?: () => void
}

enum AlertTypes {
  show = 'show',
  confirm = 'confirm',
}

interface AlertProviderContextType {
  show: (message: string, config?: AlertShowConfig) => void
  confirm: (message: string, config?: AlertConfirmConfig) => void
  hide: () => void
}
const nullCtxObj: AlertProviderContextType = {
  show: (message: string, config?: AlertShowConfig) => undefined,
  confirm: async (message: string, config?: AlertConfirmConfig) => undefined,
  hide: () => undefined,
}

const AlertProviderContext = createContext<AlertProviderContextType>(nullCtxObj)

export const useAlert = () => useContext(AlertProviderContext)

const AlertProvider = memo(({ children }) => {
  const [config, setConfig] = useState<
    AlertConfirmConfig & { message: string; type: AlertTypes }
  >()
  const [visible, setVisible] = useState(false)

  const show = (message: string, config?: AlertShowConfig) => {
    setConfig({ ...(config || {}), message, type: AlertTypes.show })
    setVisible(true)
  }
  const confirm = (message: string, config?: AlertConfirmConfig) => {
    setConfig({ ...(config || {}), message, type: AlertTypes.confirm })
    setVisible(true)
  }
  const hide = () => {
    setVisible(false)
  }

  const handleConfirm = () => {
    if (config?.onConfirm) {
      config.onConfirm()
    }
    setVisible(false)
  }

  const handleCancel = () => {
    if (config?.onCancel) {
      config.onCancel()
    }
    setVisible(false)
  }

  return (
    <AlertProviderContext.Provider value={{ show, confirm, hide }}>
      {children}
      <Modal visible={visible} animated transparent animationType="fade">
        <Box
          ph="view"
          position="absolutefill"
          alignItems="center"
          justifyContent="center"
          style={{ backgroundColor: '#00000088' }}
        >
          <Box
            width="100%"
            color="white"
            radius={6}
            style={{ overflow: 'hidden', maxWidth: 430 }}
          >
            {config?.title && (
              <Box color="primary">
                <Text p={2} variant="subtitle" color="white" align="center">
                  {config.title}
                </Text>
              </Box>
            )}
            <Box ph={4} pv={4} alignItems="center">
              <Text
                ph={4}
                mt={!!config?.title ? 0 : 2}
                mb={!!config?.title ? 3 : 6}
                align="center"
              >
                {config?.message}
              </Text>
              <Box width="100%" justifyContent="center" flexFlow="row">
                {config?.type === AlertTypes.confirm && (
                  <Box flex={1} ph={1}>
                    <Button onPress={handleCancel} variant="error">
                      {config?.cancelLabel ? config.cancelLabel : 'Cancelar'}
                    </Button>
                  </Box>
                )}
                <Box
                  flex={1}
                  ph={1}
                  style={{
                    maxWidth:
                      config?.type === AlertTypes.show ? 190 : undefined,
                  }}
                >
                  <Button onPress={handleConfirm}>
                    {config?.confirmLabel ? config.confirmLabel : 'OK'}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </AlertProviderContext.Provider>
  )
})

export default AlertProvider
