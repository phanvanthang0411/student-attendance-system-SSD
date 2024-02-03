import { createStore, applyMiddleware, combineReducers } from 'redux'
import { appReducers } from '../reducer'
import { thunk } from 'redux-thunk'

const store = createStore(combineReducers(appReducers), applyMiddleware(thunk))

export default store
