import React from 'react'
import { Box } from 'components/Box'
import { render, snapshot } from '../test-utils'
import { loadTheme } from 'shared/theme'
import 'jest-styled-components/native'
import { ThemeColors } from 'styled-components'

describe('Box snapshots', () => {
  const theme = loadTheme()

  it('default', () => {
    snapshot(render(<Box />))
  })

  it('colors', () => {
    Object.keys(theme.colors).map(key => {
      snapshot(render(<Box color={key as keyof ThemeColors} />))
    })
  })

  it('dimensions', () => {
    snapshot(render(<Box m={3} pt={5} ph={6} height={5} width={100} />))
  })

  it('flex', () => {
    snapshot(
      render(<Box flex={5} flexFlow="column" justifyContent="flex-end" />)
    )
  })
})

describe('Box matches theme', () => {
  test('render colors', () => {
    const theme = loadTheme()

    Object.keys(theme.colors).map(key => {
      const { toJSON } = render(<Box color={key as keyof ThemeColors} />)
      // @ts-ignore
      expect(toJSON()).toHaveStyleRule(
        'backgroundColor',
        theme.colors[key as keyof ThemeColors]
      )
    })
  })
})
