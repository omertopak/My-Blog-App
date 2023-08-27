import React from 'react'
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux'
import store from "./app/store"
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './app/store'

const App = () => {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppRouter/>
      </PersistGate>
    </Provider>
  )
}

export default App