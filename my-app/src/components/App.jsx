import React, {
  useState
} from "react";
import Grid2 from '@mui/material/Unstable_Grid2';
import ButtonAppBar from "./Appbar";
import Footer from "./Footer";
import Basicard from "./Card"
import SingleCard from "./SingleCard"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";




function App() {

  return (
  <div>
  <ButtonAppBar/>
    <ScrollContainer>
      <ScrollPage page={0} id="About">
        <Animator animation={batch(Sticky(), Fade(), MoveOut())}>
          <Basicard />
        </Animator>
      </ScrollPage>

      <ScrollPage page={1} id="Experience">
        <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn(), MoveOut())}>
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
          
        </Animator>
      </ScrollPage>

      <ScrollPage page={2} id="projects">
        <Animator animation={batch(Sticky(), Fade(), ZoomIn())}>
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
        </Grid2>
          
        </Animator>
      </ScrollPage>
      
    </ScrollContainer>
    <div>
    <Footer />
    </div>
  </div>
    
    
  );
}

export default App;
