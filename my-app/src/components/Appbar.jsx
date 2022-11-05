import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './Theme'
import styled from "styled-components";
import ComputerIcon from '@mui/icons-material/Computer';


export default function ButtonAppBar() {

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "#343a40" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ComputerIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ahmed Ahmed
          </Typography>
          <Button color="inherit">About me</Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
  );
}
