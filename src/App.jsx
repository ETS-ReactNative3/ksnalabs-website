import { useState, useEffect } from "react";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Our_Clients } from "./components/ourclients";
import { Our_Journey } from "./components/journey";
import { Technology } from "./components/technology";
import { Training } from "./components/training";
import { Careers } from "./components/careers";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>

      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Our_Clients data={landingPageData.Our_Clients}/>
      <Our_Journey data={landingPageData.Our_Journey}/>
      <Technology data={landingPageData.Technology}/>
      <Training data={landingPageData.Training}/>
      <Careers data={landingPageData.Careers} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
