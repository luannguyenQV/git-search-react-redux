import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import withRedux from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../widgets/Header'
import mainStyle from '../styles/styles.css'

const initStore = (reducer, initialState) => {
  const sagaMiddleware = createSagaMiddleware({sagaMonitor})
  const buildStore = () =>
    createStore(
      combineReducers({...reducer}),
      initialState,
      createSagaMiddleware(sagaMiddleware)
    )
  return buildStore
}

const mainPage = (Page) => class DefaultPage extends Component {
  static getInitialProps() {
    //
  }

  render () {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: mainStyle }} />
        <Page {...this.props}/>
      </div>
    )
  }
}

const defaultPage = ({ Page, reducer }) => (
  withRedux(
    initStore(reducer),
    
  )(mainPage(Page))
)

export default defaultPage