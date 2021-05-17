import {combineReducers} from 'redux'
import * as type from '../type'

const INIT_STATE = {
  data: null,
  loading: false
}

const reducer = (state = INIT_STATE, action) => {
  switch(action.type){
    case type.GET_DATA:
      return{...state, loading: true, data: null, error: null}
    case type.GET_DATA_SUCCESS:
      return{...state, loading: false, data: action.data, error: null}
    case type.GET_DATA_FAILED:
      return{...state, loading: false, error: action.error, data: null}
    default: 
      return{...state}
  }
}

const rootReducer = combineReducers({
  MainReducer: reducer
})

export default rootReducer