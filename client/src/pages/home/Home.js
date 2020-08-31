import React, { Fragment } from 'react'
import { Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useAuthDispatch } from '../../context/auth'

import Users from './Users'
import Messages from './Messages'

export default function Home({ history }) {
  const dispatch = useAuthDispatch()

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/login')
  }

  return (
    <Fragment>
      <Row className="bg-white justify-content-around mb-1">
        <Link to="/login">
          <Button variant="link">Login</Button>
        </Link>
        <Link to="/register">
          <Button variant="link">Register</Button>
        </Link>
        <Button variant="link" onClick={logout}>
          Logout
        </Button>
      </Row>
      <Row className="bg-white">
        <Users />
        <Messages />
      </Row>
    </Fragment>
  )
}
