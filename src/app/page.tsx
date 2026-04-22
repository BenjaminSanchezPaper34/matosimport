"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import Hero from "@/components/home/Hero";
import Event from "@/components/home/Event";
import EventPopup from "@/components/EventPopup";
import Occasions from "@/components/home/Occasions";
import Categories from "@/components/home/Categories";
import Trust from "@/components/home/Trust";
import Brands from "@/components/home/Brands";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import DualActivity from "@/components/home/DualActivity";
import BlogPreview from "@/components/home/BlogPreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <EventPopup />
      <Hero />
      <Event />
      <Occasions />
      <Categories />
      <Trust />
      <Brands />
      <FeaturedProducts />
      <Testimonials />
      <DualActivity />
      <BlogPreview />
      <CTA />
    </>
  );
}
