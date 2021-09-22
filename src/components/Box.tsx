import React, { FC } from 'react'
import {
  View,
  Animated,
  StyleSheet,
  ViewProps,
  FlexStyle,
  TouchableOpacity,
} from 'react-native'
import { DefaultTheme, ThemeColors, useTheme } from 'styled-components'
import { computeLayoutStyles, LayoutProps } from "shared/layout";

interface BoxInnerProps extends LayoutProps {
  radius?: number
  position?: 'relative' | 'absolutefill' | 'absolute'
  height?: number
  width?: number | string

  // false = flex: undefined, true = flex: 1
  flex?: FlexStyle['flex']
  flexFlow?: FlexStyle['flexDirection']
  justifyContent?: FlexStyle['justifyContent']
  alignItems?: FlexStyle['alignItems']
  color?: keyof ThemeColors
  borderColor?: keyof ThemeColors
  borderWidth?: any
  shadow?:boolean
}

const computeBoxStyles = (
  inp: BoxInnerProps,
  theme: DefaultTheme,
  style: any
) => [
  computeLayoutStyles(inp, theme),
  {
    flexDirection: inp.flexFlow,
    position: inp.position !== 'absolutefill' ? inp.position : undefined,
    alignItems: inp.alignItems,
    alignSelf: inp.alignSelf,
    justifyContent: inp.justifyContent,
    height: inp.height,
    width: inp.width,
    borderWidth: inp.borderWidth,
    borderColor:
      inp.borderColor != null ? theme.colors[inp.borderColor] : undefined,
    borderRadius:
      inp.radius !== undefined ? theme.spacing(inp.radius) : undefined,
    backgroundColor: inp.color != null ? theme.colors[inp.color] : undefined,
  },
  inp.position === 'absolutefill' && StyleSheet.absoluteFill,
  inp.shadow && {
    shadowColor: theme.colors.gray01,
    shadowRadius: 10,
    shadowOpacity: .1,
    elevation: 1,
  },
  style,
]

export type BoxProps = ViewProps & BoxInnerProps

export const Box: FC<BoxProps> = props => {
  const theme = useTheme()
  const style = computeBoxStyles(props, theme, props.style)

  return <View {...props} style={style} />
}

export const ABox: FC<
  Omit<ViewProps, 'style'> & { style: any } & BoxInnerProps
> = props => {
  const theme = useTheme()
  const style = computeBoxStyles(props, theme, props.style)

  return <Animated.View {...props} style={style} />
}

export const TouchBox: FC<
  BoxProps & { onPress: () => void; disabled?: boolean }
> = props => {
  const theme = useTheme()
  const style = computeBoxStyles(props, theme, props.style)

  return <TouchableOpacity {...props} style={style} />
}
