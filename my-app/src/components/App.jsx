import React, {
  useState
} from "react";
import Grid2 from '@mui/material/Unstable_Grid2';
import ButtonAppBar from "./Appbar";
import Footer from "./Footer";
import Basicard from "./Card"
import SingleCard from "./SingleCard"
import SideBar from './SideBar';




function App() {

  return (
  <div>
  <SideBar />
          {/* <Basicard />
        <Grid2 container spacing={2}>
          <Grid2 item>

            <SingleCard title="Software Performance, Stability and Power Optimization" company="Ford Motors Company"/>
          </Grid2>
          <Grid2 item>
            <SingleCard title="Logistics Director" company="UW product management"/>
          </Grid2>
          <Grid2 item>
            <SingleCard title="Software Developer" company="University of Waterloo Alternative Fuels Team"/>
          </Grid2>
        </Grid2>
        
        <Grid2 container spacing={2}>
          <Grid2 item>

            <SingleCard title="" company=""/>
          </Grid2>
          <Grid2 item>
            <SingleCard title="Logistics Director" company="UW product management"/>
          </Grid2>
          <Grid2 item>
            <SingleCard title="Software Developer" company="University of Waterloo Alternative Fuels Team"/>
          </Grid2>
        </Grid2> */}
    <div>
    <Footer />
    </div>
  </div>
    
    
  );
}

export default App;
