import * as React from "react"

type FruitLoopsProps = {}

function FruitLoops(props: FruitLoopsProps) {
  let fruit: Array<string> = ["red", "green", "blue", "yellow"]

  return (
    <ul>
      {fruit.map((i, index) => {
        return (
          <li style={{ color: i }} key={index}>
            {i}
          </li>
        )
      })}
    </ul>
  )
}

export default FruitLoops
