import React, { useEffect, useState } from "react"
import getData from "./form"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { MakePost } from "../redux/post/PostACtions"
import { RootStore } from "../redux/store"
interface userInputInterFace {}

interface FormInterface {
  title: string
  body: string
}

const PostForm = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [myRes, setMyRes] = useState()
  const [formData, setFormData] = useState<FormInterface>({
    title: "",
    body: "",
  })
  const dispatch = useDispatch()
  const formState = useSelector((state: RootStore) => state.mine)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(e)
    const post = {
      title: title,
      body: body,
    }
    dispatch(MakePost(post.title, post.body))

    //getData(post)
  }

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    //console.log(e.currentTarget.id)
    const { name, value } = e.currentTarget
    setTitle(e.currentTarget.value)
  }
  const onChange2 = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    console.log(e)
    setBody(e.target.value)
  }
  console.log(formState)
  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Title:</label>
          <br></br>
          <input
            onChange={onChange}
            type="text"
            id="title"
            value={title}
            name="title"
          ></input>
        </div>
        <div>
          <label>Post:</label>
          <br></br>
          <textarea onChange={onChange2} name="body" value={body} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      {formState.mine && <div>{formState.mine.title}</div>}
    </div>
  )
}

export default PostForm
