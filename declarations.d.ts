import 'styled-components'

declare module 'styled-components' {
  export interface ThemeColors {
    primary: string
    secondary: string
    gray01: string
    gray02: string
    gray03: string
    gray04: string
    gray05: string
    gray06: string
    gray07: string
    white: string
    error: string
    success: string
    info: string
    alert: string
  }

  // TEXT
  interface TextVariant {
    family: string
    size: number
    spacing?: number
  }
  export interface TextVariants {
    title: TextVariant
    smallTitle: TextVariant
    subtitle: TextVariant
    body: TextVariant
    label: TextVariant
    smallLabel: TextVariant
  }

  // BUTTONS
  interface ButtonVariant {
    background: keyof ThemeColors
    borderColor?: keyof ThemeColors
    borderWidth?: number
    fontColor?: keyof ThemeColors
  }
  export interface ButtonVariants {
    primary: ButtonVariant
    disabled: ButtonVariant
  }

  // COMPONENTS
  interface TextFieldTheme {
    height: number,
    borderRadius: number,
    background: keyof ThemeColors
    textColor: keyof ThemeColors
    labelColor: keyof ThemeColors
  }

  export interface DefaultTheme {
    spacing: (factor: number) => number
    viewPadding: number
    viewBackground: keyof ThemeColors
    components: {
      textField: TextFieldTheme
    }
    colors: ThemeColors
    text: TextVariants
    buttons: ButtonVariants
  }
}
