import React, { useContext } from "react"
import { UserContext } from "../UserContext"

export function Contextex() {
  const { value, setValue } = useContext(UserContext)
  return (
    <div>
      <p>{value}</p>
      <p>
        Used context hook to pass data through components instead of drilling
      </p>
      <button onClick={() => setValue("Pointbreak.co")}>change value</button>
    </div>
  )
}
