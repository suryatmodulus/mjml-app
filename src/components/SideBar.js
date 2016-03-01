import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { createNewTemplate, open } from '../actions/templates'
import { comingSoon } from '../actions/'

import '../styles/SideBar.scss'

// strange bug: forced to put the connect as pure false
// because component was not updated on route change
/* eslint-disable no-undefined */
@connect(undefined, undefined, undefined, { pure: false })
class SideBar extends Component {
/* eslint-enable no-undefined */

  createNew = () => {
    this.props.dispatch(createNewTemplate())
  }

  open = () => {
    this.props.dispatch(open())
  }

  comingSoon = () => {
    this.props.dispatch(comingSoon())
  }

  render () {
    return (
      <div className='SideBar'>

        <Link
          to='/browse/recent'
          activeClassName='active'
          className='SideBar-section'>
          {'Recent'}
        </Link>

        <Link
          to='/browse/templates'
          activeClassName='active'
          className='SideBar-section'>
          {'Templates'}
        </Link>

        <Link
          to='/browse/components'
          activeClassName='active'
          className='SideBar-section'>
          {'Components'}
        </Link>

        <div className='SideBar-section action'
          onClick={this.createNew}>
          {'New'}
        </div>

        <div className='SideBar-section action'
          onClick={this.open}>
          {'Open'}
        </div>

      </div>
    )
  }
}

export default SideBar
