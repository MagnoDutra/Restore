import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export default function NavBar({ darkMode, toggleTheme }: Props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <IconButton onClick={toggleTheme}>
          {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
