import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects'
import * as type from '../type'

function* getDataSaga(){
  try{
    yield delay(1000) // assuming getting data from server

    const data = require('../../../data/data.json').data
    yield put({type: type.GET_DATA_SUCCESS, data: data})
  }catch(error){
    yield put({type: type.GET_DATA_FAILED, error: error})
  }
}

export default function* rootSaga() {
  yield takeLatest(type.GET_DATA, getDataSaga)
}