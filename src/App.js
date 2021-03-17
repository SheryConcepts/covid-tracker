import { CssBaseline } from "@material-ui/core"
import Theme from "./Theme"
import { css } from "@emotion/react"
import Input from "./Input.js"

const App = () => {
  return (
    <Theme>
      <CssBaseline />
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          grid-gap: 8px;
        `}
      >
        <Input />
      </div>
    </Theme>
  )
}

export default App
