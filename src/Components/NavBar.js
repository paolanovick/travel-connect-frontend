import React, { useState } from "react";
import Logo from "../Assets/Logo.png"; // Asegúrate que la ruta sea correcta
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Inicio", icon: <HomeIcon />, link: "/" },
    { text: "Nosotros", icon: <InfoIcon />, link: "/nosotros" },
    { text: "Productos", icon: <CommentRoundedIcon />, link: "/productos" },
    { text: "Planes", icon: <WorkIcon />, link: "/Planes" },
    { text: "Contacto", icon: <PhoneRoundedIcon />, link: "/contacto" },
    { text: "Carrito", icon: <ShoppingCartRoundedIcon />, link: "/carrito" },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Links de escritorio */}
      <div className="navBar-links-container">
        {menuOptions.map((item) =>
          item.text === "Carrito" ? (
            <a key={item.text} href={item.link} className="nav-link">
              <BsCart2 className="navbar-cart-icon" />
            </a>
          ) : (
            <a key={item.text} href={item.link} className="nav-link">
              {item.text}
            </a>
          )
        )}
        <button className="primary-button">Reservar</button>
      </div>

      {/* Icono de menú para mobile */}
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/* Drawer para mobile */}
      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{ width: 250, padding: "1rem" }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            sx={{
              marginTop: "1rem",
              borderRadius: "5rem",
              backgroundColor: "#fe9e0d",
              color: "white",
              width: "100%",
            }}
          >
            Reservar
          </Button>
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavBar;
