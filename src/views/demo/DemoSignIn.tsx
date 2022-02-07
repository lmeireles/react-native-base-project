import React, { FC, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import StaticScreen from 'components/StaticScreen'
import { Text } from 'components/Text'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { Box } from 'components/Box'

const DemoSignIn: FC = () => {
  const [t] = useTranslation()

  const [code, setCode] = useState('')
  const [pass, setPass] = useState('')

  return (
    <StaticScreen>
      <Box flex={0.5} justifyContent="center">
        <Text mb={2} variant="title" align="center">
          <Trans i18nKey="DemoSignIn.title" />
        </Text>
        <Text color="gray03" align="center">
          <Trans i18nKey="DemoSignIn.description" />
        </Text>
      </Box>
      <Box flex={1}>
        <TextField
          label={t('DemoSignIn.userLabel')}
          placeholder={t('DemoSignIn.userLabel')}
          value={code}
          onChangeText={setCode}
        />

        <TextField
          label={t('DemoSignIn.passLabel')}
          placeholder={t('DemoSignIn.passLabel')}
          value={pass}
          onChangeText={setPass}
        />
        <Button disabled={code.length === 0} onPress={() => {}}>
          <Trans i18nKey="DemoSignIn.submitButton" />
        </Button>
      </Box>
    </StaticScreen>
  )
}

export default DemoSignIn
