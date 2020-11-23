import React from "react"
import logo from "./logo.svg"
import "./App.css"
import MyClass from "./components/MyClass"
import Fcomponent from "./components/FComponent"
import Home from "./containers/Home"
import GetDate from "./components/Date"
function App() {
  return (
    <div className="App">
      <GetDate />
      <Home />
      {/* <MyClass name={"testt"} age={22} />
      <Fcomponent
        name={"Scotty Bob"}
        isMarried={false}
        kids={2}
        livedIn={["CA", "NV"]}
      /> */}
    </div>
  )
}

export default App
