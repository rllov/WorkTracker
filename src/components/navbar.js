import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { Link } from "react-router-dom";
import "./navbar";
export default function navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          component={Link}
          to="/"
        >
          <HourglassTopIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Work time tracker
        </Typography>

        <Stack direction="row" spacing={2}>
          <Link to="/Features" target="_blank" style={{ color: "white" }}>
            <Button className="buttonLink" color="inherit">
              Features
            </Button>
          </Link>

          <Link to="/About" target="_blank" style={{ color: "white" }}>
            <Button className="buttonLink" color="inherit">
              About
            </Button>
          </Link>

          <Link to="/features" target="_blank" style={{ color: "white" }}>
            <Button className="buttonLink" color="inherit">
              Login
            </Button>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
