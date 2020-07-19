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
        
        <p style={{borderTop:`1px solid`, paddingTop: `10px` }}>Small project to use the basics of react hooks</p>
        <p style={{fontSize:`80%`}}>Made by Kevin Davis</p>
      </Layout>
    </UserContext.Provider>
  )
}
