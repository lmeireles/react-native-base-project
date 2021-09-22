import React, { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'

import { Text } from 'components/Text'
import { styled } from 'shared/theme'
import { Box } from "components/Box";

const Container = styled.View<{ hasLabel: boolean; hasError: boolean }>`
  width: 100%;
  flex-flow: row;
  background: ${p => p.theme.colors[p.theme.components.textField.background]};
  border-radius: ${p => p.theme.components.textField.borderRadius}px;
  border-width: 1px;
  border-color: ${p => (p.hasError ? p.theme.colors.error : 'transparent')};
  height: ${p => p.theme.components.textField.height}px;
  margin-top: ${p => (p.hasLabel ? p.theme.spacing(1) : 0)}px;
  padding: 0 16px;
  margin-bottom: 1px;
`
const StyledTextInput = styled.TextInput`
  width: 100%;
  height: ${p => p.theme.components.textField.height}px;
  color: ${p => p.theme.colors[p.theme.components.textField.textColor]};
  font-size: ${p => p.theme.text.body.size}px;
  font-family: ${p => p.theme.text.body.family};
`
const ErrorContainer = styled.View`
  padding-top: 3px;
  padding-left: 16px;
  height: 18px;
`

interface TextFieldProps extends TextInputProps {
  label?: string
  error?: string | null
}
const TextField = forwardRef<TextInput, TextFieldProps>(
  ({ label, error = '', ...props }, ref) => {
    const theme = useTheme()

    return (
      <Box mb={1.5} width="100%" flexFlow="column">
        {label && (
          <Text
            variant="label"
            color={theme.components.textField.labelColor}
          >
            {label}
          </Text>
        )}
        <Container hasLabel={!!label} hasError={!!error}>
          <StyledTextInput
            ref={ref}
            {...props}
            placeholderTextColor={
              theme.colors[theme.components.textField.textColor]
            }
          />
        </Container>
        <ErrorContainer>
          <Text variant="smallLabel" color="error">
            {error}
          </Text>
        </ErrorContainer>
      </Box>
    )
  }
)

export default TextField
