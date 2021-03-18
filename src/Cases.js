import { Card, CardContent, Typography } from "@material-ui/core"
import { useFetch } from "./Hooks.js"
import { css } from "@emotion/react"

const Cases = (props) => {
  const { input, type } = props

  const endpoint =
    input === "Worldwide"
      ? "https://covid19.mathdro.id/api"
      : `https://covid19.mathdro.id/api/countries/${input}`
  const [response, loading, error] = useFetch(endpoint)

  let cases
  if (type === "confirmed") {
    cases = (response && response.confirmed.value) || ""
  } else if (type === "deaths") {
    cases = (response && response.deaths.value) || ""
  } else if (type === "recovered") {
    cases = (response && response.recovered.value) || ""
  }

  let description
  if (type === "confirmed") {
    description = "Covid-19 cases have been reported"
  } else if (type === "deaths") {
    description = "Covid-19 patients have been died"
  } else if (type === "recovered") {
    description = "Covid-19 patients have been recovered"
  }

  return (
    <div
      css={css`
        flex: 1 200px;
        margin: 8px;
      `}
    >
      {loading ? (
        <Typography variant="body1">Loading</Typography>
      ) : (
        <Card variant="elevation">
          <CardContent>
            <Typography variant="body2">{type.toUpperCase()}</Typography>
            <Typography variant="h4">{cases}</Typography>
            <Typography variant="caption">{description}</Typography>
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
