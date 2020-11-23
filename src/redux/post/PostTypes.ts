export const POST_REQ_SEND = "POST_REQ_SEND"
export const POST_REQ_SUCCESS = "POST_REQ_SUCCESS"
export const POST_REQ_FAIL = "POST_REQ_FAIL"

export interface resType {
  userId?: number
  title?: string
  body?: string
}

export interface postSend {
  type: typeof POST_REQ_SEND
}

export interface postSuccess {
  type: typeof POST_REQ_SUCCESS
  payload: resType
}

export interface postFailure {
  type: typeof POST_REQ_FAIL
  payload: resType
}

export type PostActionTypes = postSend | postSuccess | postFailure
