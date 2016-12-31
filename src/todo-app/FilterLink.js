'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'

class Link extends Component {
  render() {
    const {
      active,
      children,
      onClick
    } = this.props

    if (active) {
      return (<span>{children}</span>)
    }

    return (
      <a href="#" onClick={onClick}>
        {children}
      </a>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      })
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink