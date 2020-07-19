import React, {useState } from "react"
import Layout from "../components/layout"
import { UserContext } from "../UserContext"
import { Contextex } from "../components/contextex"

export default function About() {

  const [value, setValue] = useState('Hello from parent component')
  return (
    <UserContext.Provider value={{value, setValue}}>
      <Layout>
        <Contextex></Contextex>

        <p>Kevin Davis</p>
      </Layout>
    </UserContext.Provider>
  )
}
