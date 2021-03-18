import { Line } from "react-chartjs-2"
import { useFetch } from "./Hooks.js"

const GlobalState = (props) => {
  const [response, loading, error] = useFetch(
    "https://covid19.mathdro.id/api/daily"
  )
  const labels = (response && response.map((item) => item.reportDate)) || []
  const confirmed =
    (response && response.map((item) => item.confirmed.total)) || []
  const deaths = (response && response.map((item) => item.deaths.total)) || []
  const data = {
    labels,
    datasets: [
      {
        label: "Confirmed",
        data: confirmed,
        fill: true,
      },
      {
        label: "Deaths",
        data: deaths,
        backgroundColor: "#edbbbb",
        borderColor: "red",
        fill: true,
      },
    ],
  }
  return <Line data={data} />
}

export default GlobalState
