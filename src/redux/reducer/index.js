import {combineReducers} from 'redux'
import * as type from '../type'

const INIT_STATE = {
  data: null
}

const reducer = (state = INIT_STATE, action) => {
  switch(action.type){
    default: 
      return{...state}
  }
}

const rootReducer = combineReducers({
  MainReducer: reducer
})

export default rootReducer