import React from "react"
import logo from "./logo.svg"
import "./App.css"
import MyClass from "./components/MyClass"
import Fcomponent from "./components/FComponent"
import Home from "./containers/Home"
import GetDate from "./components/Date"
import Posts from "./components/Posts"
import PostsForm from "./components/PostForm"
import store from "./redux/store"
import { Provider } from "react-redux"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostsForm />
        {/* <MyClass name={"testt"} age={22} />
      <Fcomponent
        name={"Scotty Bob"}
        isMarried={false}
        kids={2}
        livedIn={["CA", "NV"]}
      /> */}
      </div>
    </Provider>
  )
}

export default App
