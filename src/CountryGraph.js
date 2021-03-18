import { Bar } from "react-chartjs-2"
import { useFetch } from "./Hooks.js"
import { Typography } from "@material-ui/core"

const CountryGraph = (props) => {
  const endpoint = "https://covid19.mathdro.id/api/countries/" + props.country
  const [response, loading, error] = useFetch(endpoint)
  console.log(response)
  const confirmed = (response && response.confirmed.value) || ""
  const deaths = (response && response.deaths.value) || ""
  console.log(response)

  const data = {
    labels: ["Confirmed", "Deaths"],
    datasets: [
      {
        label: "People",
        data: [confirmed, deaths],
      },
    ],
  }
  return (
    <div>
      {loading ? (
        <Typography variant="body2">Loading...</Typography>
      ) : (
        <Bar data={data} />
      )}
    </div>
  )
}

export default CountryGraph
