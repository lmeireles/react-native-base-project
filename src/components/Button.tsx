import React, { FC } from 'react'
import { ButtonVariants, useTheme } from 'styled-components'
import {
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import { Text } from 'components/Text'
import { computeLayoutStyles, LayoutProps } from 'shared/layout'

interface ButtonProps extends TouchableOpacityProps {
  variant?: keyof ButtonVariants
}
const Button: FC<ButtonProps & LayoutProps> = ({
  variant = 'primary',
  disabled,
  children,
  style,
  ...props
}) => {
  const theme = useTheme()
  const btnStyle = theme.buttons[disabled ? 'disabled' : variant]
  const hasBorder = !!btnStyle.borderWidth && !!btnStyle.borderColor

  const styles = [
    computeLayoutStyles(props, theme),
    {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 54,
      borderRadius: 12,
      backgroundColor: theme.colors[hasBorder ? 'white' : btnStyle.background],
      borderWidth: hasBorder ? btnStyle.borderWidth : 0,
      borderColor: theme.colors[btnStyle.borderColor || 'primary'],
    } as StyleProp<ViewStyle>,
    style,
  ]

  return (
    <TouchableOpacity {...props} disabled={disabled} style={styles}>
      <Text
        variant="label"
        color={hasBorder ? btnStyle.borderColor || 'primary' : 'white'}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
