import React, { Component } from 'react'
import defaultPage from '../src/common/hocs/defaultPage'
import homeReducer from '../src/modules/index/reducer'
import Picker from '../src/modules/index/containers/Picker'
import Posts from '../src/modules/index/containers/Posts'
import stylesheet from '../src/common/styles/styles.css'

class Page extends Component {
  static getInitialProps() {
    //
  }

  render() {
    return (
      <section>
        <Picker />
        <Posts />
      </section>
    )
  }
}

export default defaultPage({
  Page, 
  reducer: { home: homeReducer }
})
