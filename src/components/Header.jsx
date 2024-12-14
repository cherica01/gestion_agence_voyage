import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings"; // Import de l'icône pour Back Office

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#c33d20" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          AGENCE DE VOYAGE E-CHERICA
        </Typography>
        <Button
          color="inherit"
          startIcon={<HomeIcon />}
          href="/"
          sx={{ fontWeight: "bold" }}
        >
          Accueil
        </Button>
        <Button
          color="inherit"
          startIcon={<HotelIcon />}
          href="/hotels"
          sx={{ fontWeight: "bold" }}
        >
          Hôtels
        </Button>
        <Button
          color="inherit"
          startIcon={<AdminPanelSettingsIcon />}
          href="/backoffice" // Lien vers la page du back-office
          sx={{ fontWeight: "bold" }}
        >
          Back Office
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
