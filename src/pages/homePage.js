import React from 'react'
import Hero from '../components/hero/Hero'
import RecommendedDestinations from '../components/RecommendedDestination'
import Carousel from "../components/carouselComponent";
import FeedbackSection from "../components/FeedbackSection";
import Footer from '../components/Footer';
let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
export default function HomePage() {
  return (
    <div>
            <Hero />
      <RecommendedDestinations />
      <Carousel slides={slides} />
      <FeedbackSection />
      <Footer />
    </div>
  )
}
