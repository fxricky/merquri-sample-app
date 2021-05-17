import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, ProviderView } from 'react-native';

import AppNavigation from './AppNavigation'

//redux setup
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import Reducer from './redux/reducer'
import Saga from './redux/saga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore( Reducer, applyMiddleware(sagaMiddleware) )
sagaMiddleware.run(Saga)

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
