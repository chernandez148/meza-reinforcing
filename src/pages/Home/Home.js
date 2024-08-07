import React from "react";

import Hero from "../../components/Hero/Hero";
import CollaborativeHeader from "../../components/CollaborativeHeader/CollaborativeHeader";
import AboutUs from "../../components/AboutUs/AboutUs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Highlights from "../../components/Highlights/Highlights";
import MeetUs from "../../components/MeetUs/MeetUs";
import ContactForm from "../../components/ContactForm/ContactForm";

import heroImg1 from "../../assets/hero-bg.jpg";
import heroImg2 from "../../assets/hero-bg-2.jpg";
import rebarDetailing from "../../assets/rebar-detailing.webp";
import rebarFabrication from "../../assets/rebar-fabrication.webp";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.webp";
import project4 from "../../assets/project4.jpg";
import "./Home.css";

function Home() {
  const heroTitle =
    "Expert Rebar Detailing, Fabrication, and Installation for Superior Concrete Reinforcement";
  const buttonText = "Get A Quote";

  const heroSlider = [
    { name: "Hero Img 1", url: heroImg1 },
    { name: "Hero Img 2", url: heroImg2 },
    // Add more hero images here if needed...
  ];

  const whatWeDoSlider = [
    {
      name: "Rebar Detailing",
      url: rebarDetailing,
      first_paragraph:
        "Our expert team provides precise and detailed rebar detailing services to ensure accurate reinforcement placement in any construction project. We use advanced software to create detailed shop drawings and bending schedules that adhere to industry standards and project specifications.",
      second_paragraph:
        "Utilizing cutting-edge CAD software, we deliver comprehensive rebar detailing that includes bar lists, bending schedules, and placement drawings. Our detailed plans help to minimize material waste and ensure on-site efficiency.",
    },
    {
      name: "Rebar Fabrication",
      url: rebarFabrication,
      first_paragraph:
        "Our expert team provides precise and detailed rebar detailing services to ensure accurate reinforcement placement in any construction project. We use advanced software to create detailed shop drawings and bending schedules that adhere to industry standards and project specifications.",
      second_paragraph:
        "Utilizing cutting-edge CAD software, we deliver comprehensive rebar detailing that includes bar lists, bending schedules, and placement drawings. Our detailed plans help to minimize material waste and ensure on-site efficiency.",
    },
  ];

  const highlightsSlider = [
    { name: "Project 1", url: project1 },
    { name: "Project 2", url: project2 },
    { name: "Project 3", url: project3 },
    { name: "Project 4", url: project4 },
  ];

  return (
    <main className="Home">
      <Hero heroTitle={heroTitle} buttonText={buttonText} slider={heroSlider} />
      <CollaborativeHeader />
      <AboutUs />
      <WhatWeDo slider={whatWeDoSlider} />
      <Highlights slider={highlightsSlider} />
      <MeetUs />
      <ContactForm />
    </main>
  );
}

export default Home;
