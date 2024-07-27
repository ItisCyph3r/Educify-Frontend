'use client'
import Image from "next/image";
import Navbar from "./conponents/HomePage/Navbar";
import HeroSection from "./conponents/HomePage/HeroSection";
import TutorsSection from "./conponents/HomePage/TutorsSection";
import AboutUs from "./conponents/HomePage/AboutUs";
import Testimonials from "./conponents/HomePage/Testimonials";
import WhyChooseUs from "./conponents/HomePage/WhyChooseUs";
import RegistrationFlow from "./conponents/HomePage/RegistrationFlow";
import HowItWorks from "./conponents/HomePage/HowItWorks";
import Explore from "./conponents/HomePage/Explore";
import SignupAsTutor from "./conponents/HomePage/SignupAsTutor";
import FaqSection from "./conponents/HomePage/Faqs";
import Footer from "./conponents/HomePage/Footer";
import { useEffect } from "react";
import NotificationTab from "./conponents/HomePage/NotificationTab";

export default function Home() {

  useEffect(() => {
    const scriptSrc =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    // Check if the script already exists
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      // If not, create and append the script
      let addScript = document.createElement("script");
      addScript.setAttribute("src", scriptSrc);
      document.body.appendChild(addScript);
    }
  }, []);
  return (
    <>
      <NotificationTab />
      <Navbar />
      <HeroSection />
      <TutorsSection />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <RegistrationFlow />
      <HowItWorks />
      <Explore />
      <SignupAsTutor />
      <FaqSection />
      <Footer />
    </>
  );
}
