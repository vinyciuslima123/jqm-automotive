import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExclusionsSection from "../components/ExclusionsSection";
import BrandsSection from "../components/BrandsSection";
import PartsSection from "../components/PartsSection";
import FooterSection from "../components/FooterSection";
import WhatsAppFloat from "../components/WhatsAppFloat";

const IMAGES = {
  hero: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/d9899b6ca_generated_375dc337.png",
  brands: {
    landRover: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/53b74eb92_generated_101b0e9b.png",
    bmw: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/01beb2cae_generated_5abdc126.png",
    mercedes: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/66c431284_generated_79981039.png",
    mini: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/389df6349_generated_75cdb7c4.png",
    audi: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/1f41633ef_generated_637eff28.png",
    porsche: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/d36d6e032_generated_cbb4dfa0.png",
  },
  parts: {
    engine: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/36dc2d00d_generated_8763e977.png",
    brake: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/f4a79a92f_generated_b70983f8.png",
    injection: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/9fdb16199_generated_3ebeec2c.png",
    suspension: "https://media.base44.com/images/public/69fc95d243cf821ea6f742e7/8210f8743_generated_b00e471c.png",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <AboutSection />
      <ExclusionsSection />
      <BrandsSection brandImages={IMAGES.brands} />
      <PartsSection partImages={IMAGES.parts} />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
}