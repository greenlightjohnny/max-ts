import * as React from "react"

type MyCompProps = {
  name: "Scotty Bob" | "blue"
  isMarried: boolean
  kids: 2 | 4
  livedIn?: ["CA", "NV"]
}

const FComponent = (props: MyCompProps) => {
  const states = props.livedIn
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.isMarried}</h1>
      <h1>{props.kids}</h1>
      <h1>
        {states?.map((i) => {
          return <p>{`I lived in: ${i}`}</p>
        })}
      </h1>
    </div>
  )
}

export default FComponent
