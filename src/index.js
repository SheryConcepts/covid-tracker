import ReactDOM from "react-dom"
import React from "react"
import App from "./App.js"

const NODE = document.getElementById("root")
ReactDOM.render(<App />, NODE)

//  Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
