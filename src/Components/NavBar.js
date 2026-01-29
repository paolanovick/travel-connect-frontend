import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ChatBotModal from "./ChatBotModal";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const menuOptions = [
    { text: "Inicio", icon: <HomeIcon />, link: "#inicio" },
    { text: "Nosotrosss", icon: <InfoIcon />, link: "#nosotros" },
    { text: "Productos", icon: <CommentRoundedIcon />, link: "#productos" },
    { text: "Planes", icon: <WorkIcon />, link: "#planes" },
    { text: "Contacto", icon: <PhoneRoundedIcon />, link: "#contacto" },
    { text: "Formulario", icon: <PhoneRoundedIcon />, link: "#formulario" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="navBar-links-container">
        {menuOptions.map((item) =>
          item.text === "Contacto" ? (
            <span
              key={item.text}
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => setOpenChat(true)}
            >
              {item.text}
            </span>
          ) : (
            <a key={item.text} href={item.link} className="nav-link">
              {item.text}
            </a>
          )
        )}
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer anchor="right" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{ width: 250, padding: "1rem" }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) =>
              item.text === "Contacto" ? (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton onClick={() => setOpenChat(true)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton component="a" href={item.link}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>

      {/* Modal del ChatBot */}
      <ChatBotModal open={openChat} handleClose={() => setOpenChat(false)} />
    </nav>
  );
};

export default NavBar;
