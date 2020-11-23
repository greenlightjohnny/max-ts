import * as React from "react"

const GetDate = () => {
  const [current, setCurrent] = React.useState("")
  const [getTime, setGetTime] = React.useState("")
  let date: string = ""
  let fetchDate = () => {
    date = new Date().toDateString()
    setCurrent(date)
  }

  let time: string = ""
  let fetchTime = () => {
    setGetTime(new Date().toTimeString())
  }

  return (
    <div>
      {current}
      {getTime}
      <button onClick={fetchDate}>Get the date</button>
      <button onClick={fetchTime}>Get the date</button>
    </div>
  )
}

export default GetDate
