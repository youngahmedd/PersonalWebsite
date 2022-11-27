import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "styled-components";
import ComputerIcon from '@mui/icons-material/Computer';
import { BrowserRouter } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';


export default function ButtonAppBar() {

  return (
    <BrowserRouter>
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
          <Button color="inherit"><NavLink to='#aboutme' smooth className="link">About me</NavLink></Button>
          <Button color="inherit"><NavLink to='#experience' smooth className="link">Experience</NavLink></Button>
          <Button color="inherit"><NavLink to='#projects' smooth className="link">Projects</NavLink></Button>
        </Toolbar>
      </AppBar>
      </BrowserRouter>
  );
}
