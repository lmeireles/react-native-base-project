import React, { FC, ReactNode } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { useTheme } from 'styled-components'
import DefaultHeader from 'components/DefaultHeader'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Box } from 'components/Box'

interface StaticScreen {
  title?: string
  CustomHeader?: ReactNode
  paddingH?: boolean
  paddingV?: boolean
  keyboard?: boolean
}
const StaticScreen: FC<StaticScreen> = ({
  children,
  paddingH = true,
  paddingV = true,
  keyboard = true,
  title,
  CustomHeader,
}) => {
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  let header = null

  if (title) {
    header = <DefaultHeader title={title} />
  } else if (CustomHeader) {
    header = CustomHeader
  }

  return (
    <Box
      flex={1}
      color={theme.viewBackground}
      style={{
        paddingTop: header ? 0 : insets.top,
        paddingBottom: insets.bottom
      }}
    >
      {header}
      <Box flex={1} ph={paddingH ? 'view' : 0} pv={paddingV ? 'view' : 0}>
        <KeyboardAvoidingView enabled={keyboard} style={{ flex: 1 }}>
          {children}
        </KeyboardAvoidingView>
      </Box>
    </Box>
  )
}

export default StaticScreen
