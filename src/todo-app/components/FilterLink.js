import React, {Component} from 'react'
import {connect} from 'react-redux'

import setFilter from '../actions/setFilter'

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

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink