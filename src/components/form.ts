import axios from "axios"

type Info = {
  title: string
  body: string
}

const getData = async (yep: Info) => {
  console.log(yep)
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  } catch (err) {
    console.log(err.message)
  }
}

export default getData
