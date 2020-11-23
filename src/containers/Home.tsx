import React from "react"
import Header from "../components/Header"
import GetDate from "../components/Date"
import FruitLoops from "../components/Loops"

const Home = () => {
  return (
    <>
      <Header text={"Hello people"} />
      <GetDate />
      <FruitLoops />
    </>
  )
}
export default Home
