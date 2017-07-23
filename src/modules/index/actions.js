import { createAction } from 'redux-actions'

const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = 'RECEIVE_POSTS'
const SELECT_REDDIT = 'SELECT_REDDIT'
const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const requestPost = createAction(REQUEST_POSTS)

export const receivePost = createAction(RECEIVE_POSTS)

export const selectReddit = createAction(SELECT_REDDIT)

export const invalidateReddit = createAction(INVALIDATE_REDDIT)
