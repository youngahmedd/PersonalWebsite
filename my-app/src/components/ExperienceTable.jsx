import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="cards">
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: 224, borderRadius: '20px', backgroundColor: '#e6e3dc', m: '40px' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Ford" {...a11yProps(0)} />
        <Tab label="UW Product Management" {...a11yProps(1)} />
        <Tab label="UWAFT" {...a11yProps(2)} />
        <Tab label="Junior Schievement" {...a11yProps(3)} />
        <Tab label="Stride" {...a11yProps(4)} />
        <Tab label="YMCA" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Ford Motors Company
        </Typography>
        <Typography variant="h5" component="div">
        Software Stability, performance and Power Optimization Intern
        </Typography>
        <Typography variant="body2">
        • Attended daily scrum meetings to provide updates on Jira tickets for the current sprint.
        <br></br>
        • Implemented python scripts to measure KPIs used to quantify system health and quality of the infotainment
        components.
        <br></br>
        • Automated many Lab tasks using Python saving the team around 5 hours a week
        <br></br>
        • Developed a way to break up JSON files which include data that is fetched from a MySQL database into
          smaller chunks using python leading to reduced loading times within the team’s internal website by 30 seconds
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      University of Waterloo Product Management Club
        </Typography>
        <Typography variant="h5" component="div">
        Logistics Director
        </Typography>
        <Typography variant="body2">
        • Planned, executed, and followed up with the logistics for UW PM’s events such as mock interviews and ProdCon 2022
        <br></br>
        • Coordinated promotional campaigns with marketing to increase event attendance, with Mock Interviews receiving 50+ responses and Prodcon with 200+ applicants
        <br></br>
        • Attended weekly meetings, and set both personal and team goals to grow UW PM
        <br></br>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </Box>
    </div>
  );
}

