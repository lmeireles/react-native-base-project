import React from 'react'
import { render, snapshot } from '../test-utils'
import { loadTheme } from 'shared/theme'
import 'jest-styled-components/native'
import { ButtonVariants } from 'styled-components'
import Button from 'components/Button'
import { fireEvent } from '@testing-library/react-native'

describe('Button snapshots', () => {
  const theme = loadTheme()

  it('default', () => {
    snapshot(render(<Button>Test</Button>))
  })

  it('variants', () => {
    Object.keys(theme.buttons).map(key => {
      snapshot(
        render(<Button variant={key as keyof ButtonVariants}>Test</Button>)
      )
    })
  })

  it('dimensions', () => {
    snapshot(
      render(
        <Button m={3} pt={5} ph={6}>
          Test
        </Button>
      )
    )
  })
})

describe('Button', () => {
  test('onPress callback', () => {
    const cb = jest.fn()
    const { getByText } = render(<Button onPress={cb}>Test</Button>)

    fireEvent.press(getByText('Test'))
    expect(cb).toBeCalled()
  })
})
