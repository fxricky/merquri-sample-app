import { call, put, takeEvery, takeLatest, delay, select } from 'redux-saga/effects'
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

function* updateDataSaga({payload}){
  const {id, firstName, lastName, email, phone} = payload
  try{
    if(!id){
      throw new Error('ID must be provided')
    }

    const {data} = yield select(reducer => reducer.MainReducer)
    const cloneData = [...data]

    yield delay(1000)

    const selectedDataIndex = cloneData.findIndex(obj => obj.id == id)

    cloneData[selectedDataIndex] = {...payload}

    yield put({type: type.GET_DATA_SUCCESS, data: cloneData})
    yield put({type: type.UPDATE_DATA_SUCCESS, payload: 'Update data successful.'})
    alert('Data update successfully.')
  }catch(error){
    yield put({type: type.UPDATE_DATA_FAILED, error: error})
    alert(error)
  }
}

export default function* rootSaga() {
  yield takeLatest(type.GET_DATA, getDataSaga)
  yield takeLatest(type.UPDATE_DATA, updateDataSaga)
}