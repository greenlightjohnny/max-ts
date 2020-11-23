import {
  POST_REQ_FAIL,
  POST_REQ_SEND,
  POST_REQ_SUCCESS,
  PostActionTypes,
} from "./PostTypes"
import { Dispatch } from "redux"
import axios from "axios"
import { title } from "process"
interface AllM {}

export const MakePost = (title: string, body: string) => async (
  dispatch: Dispatch<PostActionTypes>
) => {
  try {
    dispatch({
      type: POST_REQ_SEND,
    })
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: title,
      body: body,
    })
    console.log("success")
    dispatch({
      type: POST_REQ_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    console.log(err.message)
    dispatch({
      type: POST_REQ_FAIL,
      payload: err.message,
    })
  }
}
