import { createStore } from 'redux'
import { gameOfLifeReducer } from './reducers'

export const store = createStore(gameOfLifeReducer)