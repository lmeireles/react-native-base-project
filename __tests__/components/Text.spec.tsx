import React from 'react'
import { render, snapshot } from '../test-utils'
import { loadTheme } from 'shared/theme'
import { Text } from 'components/Text'
import 'jest-styled-components/native'
import { TextVariants, ThemeColors } from 'styled-components'

describe('Text snapshots', () => {
  const theme = loadTheme()

  it('default', () => {
    snapshot(render(<Text>Test</Text>))
  })

  it('variants', () => {
    Object.keys(theme.text).map(key => {
      snapshot(render(<Text variant={key as keyof TextVariants}>Test</Text>))
    })
  })

  it('colors', () => {
    Object.keys(theme.colors).map(key => {
      snapshot(render(<Text color={key as keyof ThemeColors}>Test</Text>))
    })
  })

  it('dimensions', () => {
    snapshot(
      render(
        <Text m={3} pt={5} ph={6}>
          Test
        </Text>
      )
    )
  })
})

describe('Text matches theme', () => {
  test('render colors', () => {
    const theme = loadTheme()

    Object.keys(theme.colors).map(key => {
      const { toJSON } = render(
        <Text color={key as keyof ThemeColors}>Test</Text>
      )
      // @ts-ignore
      expect(toJSON()).toHaveStyleRule(
        'color',
        theme.colors[key as keyof ThemeColors]
      )
    })
  })
})
