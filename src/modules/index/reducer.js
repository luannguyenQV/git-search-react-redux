import { handleActions } from 'redux-actions'
import {
  requestPost,
  receivePost,
  selectReddit,
  invalidateReddit
} from './actions'

const defaultState = {
  
}

const handlers = {

}

export default handleActions(handlers, defaultState)
