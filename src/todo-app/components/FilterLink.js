import React, {Component} from 'react'
import {Link} from 'react-router'
import {ALL} from '../constants/filterTypes'

const FilterLink = ({filter, children}) => (
  <Link
    to={filter === ALL ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}>
    {children}
  </Link>
)

export default FilterLink