"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "@mui/material";

const pages = ["Search By Name", "Search By Type"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function HeadBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const links = ["/name", "/type"];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "75vw",
        my: 5,
        pr:2,
        borderRadius: 5,
        backgroundColor: "white",
        color: "#ff7961",
        boxShadow: "2px 2px 10px #0000003c",
      }}
    >
      <Container maxWidth="sm">
        <Toolbar disableGutters>
          <CatchingPokemonIcon
            sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 4,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PokeDex
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } ,alignItems:"center",width:"70%"}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "#ff7961",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button href={links[index]} sx={{ color: "black" }}>
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link href="/" alignItems="center"sx={{
            textDecoration:"none",
            color:"inherit",
            display:"flex",
            m:0
          }}>
          <CatchingPokemonIcon
            sx={{ display: { xs: "flex", sm: "none" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PokeDex
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={links[index]}
                sx={{
                  my: 2,
                  color: "inherit",
                  bgcolor: "inherit",
                  display: "block",
                  fontSize: 15,
                  fontFamily: "Roboto",
                  fontWeight: "600",
                  width:"max-content"
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeadBar;
