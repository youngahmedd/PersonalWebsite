import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { spacing } from '@mui/system';
import Footer from "./Footer";
import ButtonAppBar from "./Appbar";
import Basicard from "./Card"
import VerticalTabs from './ExperienceTable';
import Projects from './ProjectsTable';



const drawerWidth = 65;

export default function ClippedDrawer() {
  return (
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      
      <Typography>
      <Box sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>ABOUT ME</Box>
      </Typography>
      
      <Basicard />

      <Typography>
      <Box sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>EXPERIENCE</Box>
      </Typography>
      
      <VerticalTabs />

      <Typography>
      <Box sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>PROJECTS</Box>
      </Typography>
        
        <Projects />

      <Typography>
      <Box sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>CONTACT</Box>
      </Typography>
      </Box>
      
    </Box>
  );
}
