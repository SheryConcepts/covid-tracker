import { Card, CardContent, Typography } from "@material-ui/core"
import { useState, useReducer, useEffect } from "react"
import { useFetch } from "./Hooks.js"
import { css } from "@emotion/react"

// const reducer = (state, action) => {
//   if (action.type === "LOADING") {
//     return {
//       response: false,
//       loading: true,
//       error: false,
//     }
//   }
//   if (action.type === "ERROR") {
//     return {
//       response: false,
//       loading: false,
//       error: action.payload.error,
//     }
//   }
//   if (action.type === "SUCCESS") {
//     return {
//       response: action.payload.response,
//       loading: false,
//       error: false,
//     }
//   }
//   return state
// }
const Cases = (props) => {
  // const [{ response, loading, error }, dispatch] = useReducer(reducer, {
  //   response: false,
  //   loading: true,
  //   error: false,
  // })
  // useEffect(() => {
  //   dispatch({
  //     type: "LOADING",
  //   })
  //   fetch(endpoint)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       dispatch({
  //         type: "SUCCESS",
  //         payload: {
  //           response: data,
  //         },
  //       })
  //     })
  //     .catch((error) =>
  //       dispatch({
  //         type: "ERROR",
  //         payload: {
  //           error,
  //         },
  //       })
  //     )
  // }, [dispatch])

  const { input, styles, type } = props
  // console.log(input, type)
  const endpoint =
    input === "Worldwide"
      ? "https://covid19.mathdro.id/api"
      : `https://covid19.mathdro.id/api/countries/${input}`
  console.log(endpoint)
  const [response, loading, error] = useFetch(endpoint)
  console.log(response)

  let cases
  if (type === "confirmed") {
    cases = (response && response.confirmed.value) || ""
  } else if (type === "deaths") {
    cases = (response && response.deaths.value) || ""
  } else if (type === "recovered") {
    cases = (response && response.recovered.value) || ""
  }

  console.log(cases)
  return (
    <div>
      {loading ? (
        <Typography variant="body1">Loading</Typography>
      ) : (
        <Card
          variant="elevation"
          css={css`
            ${styles}
          `}
        >
          <CardContent>
            <Typography variant="body2">{type.toUpperCase()}</Typography>
            <Typography variant="h4">{cases}</Typography>
            <Typography variant="caption">cases have been reported</Typography>
          </CardContent>
        </Card>
      )}
      {error ? (
        <Typography variant="body1">An error has occurred</Typography>
      ) : null}
    </div>
  )
}

export default Cases
