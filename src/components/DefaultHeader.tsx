import React, { FC, memo } from 'react'
import { Box, TouchBox } from './Box'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text } from './Text'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

interface DefaultHeader {
  title: string
  hideLeft?: boolean
  customLeft?: () => void
}
const DefaultHeader: FC<DefaultHeader> = ({ title, hideLeft, customLeft }) => {
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  const handleLeftAction = () => {
    if (customLeft) {
      customLeft()
    } else {
      navigation.goBack()
    }
  }

  return (
    <Box
      color="white"
      width="100%"
      style={{
        paddingTop: insets.top,
        shadowColor: theme.colors.primary,
        shadowRadius: 20,
        shadowOpacity: 0.15,
      }}
    >
      <Box pv={2} flexFlow="row" alignItems="center">
        {hideLeft ? (
          <Box pr={2.2} width={30} />
        ) : (
          <TouchBox pl={2.2} width={30} onPress={handleLeftAction}>
            Back
          </TouchBox>
        )}

        <Box flex={1}>
          <Text variant="title" align="center">
            {title}
          </Text>
        </Box>

        <Box pr={2.2} width={30} />
      </Box>
    </Box>
  )
}

export default memo(DefaultHeader)
