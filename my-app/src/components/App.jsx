import React, {
  useState
} from "react";
import ButtonAppBar from "./Appbar";
import Footer from "./Footer";
import Basicard from "./Card"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";




function App() {

  return (
    // <div>
    //   
    //   <Basicard />
    //   <Basicard />
    //   <Basicard />
    //   <div>
    // <Footer />
    // </div>
    // </div>
  <div>
  <ButtonAppBar/>
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={Sticky()} id = 'ahmed'>
          <Basicard />
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={Sticky()}>
          <Basicard />
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
