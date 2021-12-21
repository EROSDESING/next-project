import React from 'react'
import Head from 'next/head'
import Container from '../components/Container'
import fetch from 'isomorphic-fetch'
import Users from '../components/Users'

const Index = (props) => {
  return (
    <div>
      <Head>
        <title>Next Project - Home</title>
      </Head>
      <Container>
        <h1>Next.JS</h1>
        <Users users={props.users} />
      </Container>
    </div>
  )
}
Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users')
  const resJSON = await res.json()

  return { users: resJSON.data }
}

export default Index
