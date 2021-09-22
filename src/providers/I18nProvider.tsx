import React, { FC, useEffect, Suspense } from 'react'
import { NativeModules, Platform, StyleSheet, View } from 'react-native'
import i18n from 'i18next'
import { initReactI18next, I18nextProvider } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'

import locales from 'shared/locales/locales'

export const I18nProvider: FC = ({ children }) => {
  useEffect(() => {
    let locale
    if (Platform.OS === 'ios') {
      locale = NativeModules.SettingsManager.settings.AppleLocale || 'pt_BR'
    } else {
      const loc = RNLocalize.getLocales()[0]
      if (loc == null) {
        locale = NativeModules.I18nManager.localeIdentifier
      } else {
        locale = loc.languageTag + '_' + loc.countryCode
      }
    }
    const [language] = locale.split('_')

    i18n.use(initReactI18next).init({
      lng: language,
      fallbackLng: 'en',
      resources: locales,

      ns: ['common'],
      defaultNS: 'common',
      fallbackNS: 'common',

      interpolation: {
        escapeValue: false,
      },
    })
  }, [])
  return (
    <Suspense fallback={<View style={StyleSheet.absoluteFill} />}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </Suspense>
  )
}
