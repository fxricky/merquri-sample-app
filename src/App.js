import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';

//redux setup
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Reducer from './redux/reducer'
import Saga from './redux/saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  Reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(Saga)

// render the application

const App = () => {
  return (
    <View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
