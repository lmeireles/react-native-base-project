import { Dimensions } from 'react-native'
import { DefaultTheme } from 'styled-components'
import * as styledComponents from 'styled-components/native'

export const {
  default: styled,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>

export const SMALL_DEVICE = Dimensions.get('window').width <= 350
export const MEDIUM_DEVICE = Dimensions.get('window').height <= 684
const UNIT = SMALL_DEVICE ? 4 : MEDIUM_DEVICE ? 6 : 8
const spacing = (factor: number): number => UNIT * factor

export const loadTheme = (externalTheme?: DefaultTheme): DefaultTheme => {
  return {
    spacing,
    viewPadding: SMALL_DEVICE ? spacing(2) : spacing(3),
    viewBackground: 'white',
    components: {
      textField: {
        height: 56,
        borderRadius: 12,
        background: 'gray07',
        labelColor: 'gray01',
        textColor: 'gray04',
      },
      ...(externalTheme?.components || {})
    },
    colors: {
      primary: '#240A36', // #364FD4
      secondary: '#e0e3fd',
      gray01: '#1E2126',
      gray02: '#5C6574',
      gray03: '#828B9A',
      gray04: '#B9C1CC',
      gray05: '#CAD1D9',
      gray06: '#E4E9ED',
      gray07: '#F0F3F8',
      white: '#FFFFFF',
      error: '#F13F11',
      success: '#00CC96',
      info: '#14C4E6',
      alert: '#FDC34E',
      ...(externalTheme?.colors || {})
    },
    text: {
      title: {
        family: 'Poppins-Bold',
        size: 28,
        spacing: 0.2,
      },
      smallTitle: {
        family: 'Poppins-Bold',
        size: 14,
      },
      subtitle: {
        family: 'Poppins-Regular',
        size: 16,
        spacing: 0.2,
      },
      body: {
        family: 'Poppins-Regular',
        size: 16,
        spacing: 0.1,
      },
      label: {
        family: 'Poppins-SemiBold',
        size: 16,
      },
      smallLabel: {
        family: 'Poppins-Regular',
        size: 12,
      },
      ...(externalTheme?.text || {})
    },
    buttons: {
      primary: {
        background: 'primary',
      },
      disabled: {
        background: 'gray05',
      },
      ...(externalTheme?.buttons || {})
    },
  }
}
