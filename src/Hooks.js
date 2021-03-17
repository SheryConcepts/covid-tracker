import { useReducer, useEffect } from "react"

export const useFetch = (url) => {
  console.log(url)
  const reducer = (state, action) => {
    if (action.type === "LOADING") {
      return {
        response: false,
        loading: true,
        error: false,
      }
    }
    if (action.type === "ERROR") {
      return {
        response: false,
        loading: false,
        error: action.payload.error,
      }
    }
    if (action.type === "SUCCESS") {
      return {
        response: action.payload.response,
        loading: false,
        error: false,
      }
    }
    return state
  }

  const [state, dispatch] = useReducer(reducer, {
    response: false,
    loading: true,
    error: false,
  })
  useEffect(() => {
    dispatch({
      type: "LOADING",
    })
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        dispatch({
          type: "SUCCESS",
          payload: {
            response: data,
          },
        })
      })
      .catch((error) =>
        dispatch({
          type: "ERROR",
          payload: {
            error,
          },
        })
      )
  }, [url, dispatch])

  return [state.response, state.loading, state.error]
}
