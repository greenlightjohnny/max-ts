import React, { useEffect } from "react"
import axios from "axios"
const Posts = () => {
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://jsonplaceholder.typicode.com/posts"
    //     )
    //     const fReply = res.data
    //     console.log(fReply)
    //   } catch (error) {
    //     console.log(error.message)
    //   }
    // }
    // fetchData()
  }, [])

  return (
    <div>
      <h1>Posts</h1>
    </div>
  )
}
export default Posts
