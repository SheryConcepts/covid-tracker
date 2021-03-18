import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { css } from "@emotion/react"

const Header = (props) => {
  return (
    <AppBar
      position="static"
      css={css`
        grid-row: 1;
        grid-column: 1/13;
      `}
    >
      <Toolbar>
        <Typography variant="h3">Covid Tracker</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
