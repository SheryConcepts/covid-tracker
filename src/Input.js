import { TextField, MenuItem, Typography } from "@material-ui/core"
import { useState } from "react"
import { useFetch } from "./Hooks.js"
import { css } from "@emotion/react"
import Cases from "./Cases.js"

const Input = (props) => {
  // Fetch Data from Api
  const endpoint = "https://covid19.mathdro.id/api/countries"
  const [response, loading, error] = useFetch(endpoint)
  console.log(response, loading, error)
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
        grid-column: 4/10;
        grid-row: 2;
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
      <Cases type="confirmed" input={country} />
      <Cases type="recovered" input={country} />
      <Cases type="deaths" input={country} />
    </div>
  )
}

export default Input
