import { Paper, Typography } from "@material-ui/core"
import { css } from "@emotion/react"
import CountryGraph from "./CountryGraph.js"
import GlobalGraph from "./GlobalGraph.js"

const Chart = (props) => {
  const { input } = props

  return (
    <Paper
      css={css`
        grid-column: 2/12;
        grid-row: 4;
      `}
    >
      {input === "Worldwide" ? (
        <GlobalGraph />
      ) : (
        <CountryGraph country={input} />
      )}
    </Paper>
  )
}

export default Chart
