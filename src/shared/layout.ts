import { FlexAlignType, FlexStyle } from 'react-native'
import { DefaultTheme } from 'styled-components'

type Spacing = number | 'view'
type ComputedSpacing = number | undefined

export interface LayoutProps {
  // Margin
  m?: Spacing
  mt?: Spacing
  mb?: Spacing
  ml?: Spacing
  mr?: Spacing
  mh?: Spacing
  mv?: Spacing

  // false = flex: undefined, true = flex: 1
  alignSelf?: FlexStyle['alignSelf']

  // Padding
  p?: Spacing
  pt?: Spacing
  pb?: Spacing
  pl?: Spacing
  pr?: Spacing
  ph?: Spacing
  pv?: Spacing
}

const computeSpacing = (
  v: Spacing | null | undefined,
  theme: DefaultTheme
): ComputedSpacing => {
  if (typeof v === 'number') {
    return theme.spacing(v)
  }

  if (v === 'view') {
    return theme.viewPadding
  }

  return undefined
}

export type ComputedLayoutStyles = {
  alignSelf: FlexAlignType | 'auto' | undefined

  margin: ComputedSpacing
  marginTop: ComputedSpacing
  marginBottom: ComputedSpacing
  marginLeft: ComputedSpacing
  marginRight: ComputedSpacing
  marginHorizontal: ComputedSpacing
  marginVertical: ComputedSpacing

  padding: ComputedSpacing
  paddingTop: ComputedSpacing
  paddingBottom: ComputedSpacing
  paddingLeft: ComputedSpacing
  paddingRight: ComputedSpacing
  paddingHorizontal: ComputedSpacing
  paddingVertical: ComputedSpacing
}

export const computeLayoutStyles = (
  inp: LayoutProps,
  theme: DefaultTheme
): ComputedLayoutStyles => ({
  alignSelf: inp.alignSelf,

  margin: computeSpacing(inp.m, theme),
  marginTop: computeSpacing(inp.mt, theme),
  marginBottom: computeSpacing(inp.mb, theme),
  marginLeft: computeSpacing(inp.ml, theme),
  marginRight: computeSpacing(inp.mr, theme),
  marginHorizontal: computeSpacing(inp.mh, theme),
  marginVertical: computeSpacing(inp.mv, theme),

  padding: computeSpacing(inp.p, theme),
  paddingTop: computeSpacing(inp.pt, theme),
  paddingBottom: computeSpacing(inp.pb, theme),
  paddingLeft: computeSpacing(inp.pl, theme),
  paddingRight: computeSpacing(inp.pr, theme),
  paddingHorizontal: computeSpacing(inp.ph, theme),
  paddingVertical: computeSpacing(inp.pv, theme),
})
