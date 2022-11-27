import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ButtonAppBar from "./Appbar";
import Basicard from "./Card"
import VerticalTabs from './ExperienceTable';
import Projects from './ProjectsTable';
import { BrowserRouter } from "react-router-dom";



const drawerWidth = 65;

export default function ClippedDrawer() {
  return (
    <BrowserRouter> 
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ButtonAppBar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
        <a href='https://github.com/youngahmedd' target='_blank'>
            <ListItemButton sx={{ mt: '220px'}}>
                <ListItemIcon><GitHubIcon /></ListItemIcon>
            </ListItemButton>
        </a>
        <a href='mailto:ah4ahmed@uwaterloo.ca'>
            <ListItemButton sx={{ my: '50px', width: 200 }}>
                <ListItemIcon><MailIcon /></ListItemIcon>
            </ListItemButton>
        </a>
        <a href='https://www.linkedin.com/in/ahmed-ahmed24/' target='_blank'>
            <ListItemButton sx={{ mb: '200px', width: 200 }}>
                <ListItemIcon><LinkedInIcon /></ListItemIcon>
            </ListItemButton>
        </a>
          </List>
        </Box>
      </Drawer>
      
      <Toolbar />
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography id="aboutme">
      <Box sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 30, mt: "50px" }}>ABOUT ME</Box>
      </Typography>
      
      <Basicard />

      <Typography id="experience">
      <Box sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>EXPERIENCE</Box>
      </Typography>
      
      <VerticalTabs />

      <Typography id="projects">
      <Box sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>PROJECTS</Box>
      </Typography>
        
        <Projects />

      </Box>
      
    </Box>
    </BrowserRouter>
  );
}
