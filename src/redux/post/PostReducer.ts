import { resType, PostActionTypes } from "./PostTypes"

import * as pTypes from "./PostTypes"

interface DefaultI {
  loading: boolean
  mine?: resType
}

const defaultState: DefaultI = {
  loading: false,
}

const postReducer = (
  state: DefaultI = defaultState,
  action: PostActionTypes
): DefaultI => {
  switch (action.type) {
    case pTypes.POST_REQ_SEND:
      return {
        ...state,
        loading: true,
      }
    case pTypes.POST_REQ_SUCCESS:
      return {
        ...state,
        loading: false,
        mine: action.payload,
      }
    case pTypes.POST_REQ_FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default postReducer
