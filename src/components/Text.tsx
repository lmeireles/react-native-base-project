import React, { FC, ReactNode } from 'react'
import {
  TextProps as RNTextProps,
  Text as RNText,
  TextStyle,
  Animated,
} from 'react-native'
import { TextVariants, ThemeColors, useTheme } from 'styled-components'
import { computeLayoutStyles, LayoutProps } from 'shared/layout'

interface TextProps extends RNTextProps {
  children: ReactNode
  variant?: keyof TextVariants
  color?: keyof ThemeColors
  align?: TextStyle['textAlign']
}

export const Text: FC<TextProps & LayoutProps> = ({
  variant = 'body',
  color = 'gray01',
  align = 'auto',
  style,
  ...props
}) => {
  const theme = useTheme()
  const variantStyle = theme.text[variant]

  if (variantStyle == null) {
    throw new Error('Undefined variant')
  }

  const styles = [
    computeLayoutStyles(props, theme),
    {
      fontFamily: variantStyle.family,
      fontSize: variantStyle.size,
      letterSpacing: variantStyle.spacing || undefined,
      color: theme.colors[color],
      textAlign: align,
    },
    style,
  ]

  return <RNText {...props} style={styles} maxFontSizeMultiplier={1.1} />
}

export const AText: FC<
  Omit<TextProps, 'style'> & { style: any } & LayoutProps
> = ({
  variant = 'body',
  color = 'gray01',
  align = 'auto',
  style,
  ...props
}) => {
  const theme = useTheme()
  const variantStyle = theme.text[variant]

  if (variantStyle == null) {
    throw new Error('Undefined variant')
  }

  const styles = [
    computeLayoutStyles(props, theme),
    {
      fontFamily: variantStyle.family,
      fontSize: variantStyle.size,
      letterSpacing: variantStyle.spacing || undefined,
      color: theme.colors[color],
      textAlign: align,
    },
    style,
  ]

  return <Animated.Text {...props} style={styles} maxFontSizeMultiplier={1.1} />
}
