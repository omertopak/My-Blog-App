import React from 'react'
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux'
import store from "./app/store"
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './app/store'
import { ThemeProvider } from '@emotion/react'
import { theme } from './style/theme'

const App = () => {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App