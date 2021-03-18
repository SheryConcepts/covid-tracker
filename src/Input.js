import { TextField, MenuItem, Typography } from "@material-ui/core"
import { useState } from "react"
import { useFetch } from "./Hooks.js"
import { css } from "@emotion/react"
import Cases from "./Cases.js"
import Graph from "./Graph.js"

const Input = (props) => {
  // Fetch Data from Api
  const endpoint = "https://covid19.mathdro.id/api/countries"
  const [response, loading, error] = useFetch(endpoint)
  const data = (response && response.countries) || []
  const countries = data.map((item) => item.name)
  countries.unshift("Worldwide")

  // handle the input
  const [country, setCountry] = useState("Worldwide")
  const handleCountryChange = (e) => {
    setCountry(e.target.value)
  }

  return (
    <div
      css={css`
        grid-column: 2/12;
        grid-row: 2;
        display: grid;
        gap: 8px;
        grid-template-columns: repeat(12, minmax(0, 1fr));
      `}
    >
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <TextField
          fullWidth
          select
          variant="outlined"
          value={country}
          onChange={handleCountryChange}
          css={css`
            grid-column: 4/10;
            grid-row: 1;
          `}
        >
          {countries.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      )}
      {error ? (
        <Typography varinat="body2">An error has occurred</Typography>
      ) : null}
      <div
        css={css`
          grid-column: 1/13;
          grid-row: 2;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: space-between;
        `}
      >
        <Cases type="confirmed" input={country} />
        <Cases type="recovered" input={country} />
        <Cases type="deaths" input={country} />
      </div>
      <Graph input={country} />
    </div>
  )
}

export default Input
