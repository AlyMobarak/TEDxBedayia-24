"use client";
import HeroSection from "@/views/Home/Hero Section/hero";
import Info from "@/views/Home/Information/info";
import Navigation from "@/views/Home/Navigation Bar/navigation";
import Theme from "@/views/Home/Theme Description/theme";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    location.href = "https://www.tedxbedayia.com";
  });
  return (
    <center className="wrapper" style={{ scrollBehavior: "smooth" }}>
      <Navigation />

      <HeroSection />

      <Theme />

      <Info />

      <div className="temp-note mt-20 w-[33.5rem] font-small text-text-gray-dark max-phone:w-[95vw]">
        Send us a WhatsApp message at{" "}
        <a
          className="font-body text-secondary-200"
          href="https://wa.me/201055782533"
        >
          +201055782533
        </a>{" "}
        if you find any bugs.
      </div>
    </center>
  );
}
