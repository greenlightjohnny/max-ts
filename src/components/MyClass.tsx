import React, { useState } from "react"

export interface MyClassProps {
  name: string
  isMarried?: boolean
}

export interface MyClassState {
  age?: number
}
type Props = MyClassProps & MyClassState

const MyClass: React.FC<Props> = (props) => {
  const [myState, setmyState] = useState(21)
  return (
    <div>
      <h1>
        {props.name}: {props.isMarried ? "yes" : "no"} Age: {props.age}
      </h1>
    </div>
  )
}

export default MyClass
