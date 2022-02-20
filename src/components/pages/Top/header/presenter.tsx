import { Button, Toolbar, Box, AppBar, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { FC } from "react";

export const HeaderPresenter: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <IconButton>
            <Menu />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
