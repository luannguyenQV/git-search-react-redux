import { take, put, call, fork, select } from 'redux-saga'
import fetch from 'isomorphic-fetch'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_REDDIT,
  INVALIDATE_REDDIT,
  requestPost,
  receivePost,
  selectReddit,
  invalidateReddit
} from '../../modules/index/actions'
import { 
  selectedRedditSelector,
  postsByRedditSelector
} from '../../modules/index/selector'

export function fetchPostsApi(reddit) {
  return fetch(`http://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => json.data.children.map(child => child.data))
}

export function* fetchPosts(reddit) {
  yield put(requestPost(reddit))
  const posts = yield call(fetchPostsApi, reddit) 
  yield put(receivePost(posts))
}

export function* invalidReddit() {
  while (true) {
    const {reddit} = yield take(INVALIDATE_REDDIT)
    yield call(fetchPosts, reddit)
  }
}

export function* nextRedditChange() {
  while(true) {

  }
}

export function* startup() {
  
  const posts = yield call(fetchPostsApi, reddit)
}

export default function* root() {
  yield fork(startup)
  yield fork(nextRedditChange)
  yield fork(invalidReddit)
}
