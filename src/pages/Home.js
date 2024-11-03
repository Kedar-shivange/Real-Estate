// src/pages/Home.js
import React from 'react'
import Slider from '../components/home/Slider'
import SearchSection from '../components/home/SearchSection'
import AboutUs from '../components/home/AboutUs'
import LatestProperties from '../components/home/LatestProperties'
import Services from '../components/home/Services'
import PromotionalBanner from '../components/home/PromotionalBanner'
import AgentList from '../components/agents/AgentList'
import Testimonials from '../components/common/Testimonials'
import ClientBrands from '../components/common/ClientBrands'
import LatestBlog from '../components/blog/LatestBlog'

export default function Home() {
  return (
    <main>
      <Slider />
      <SearchSection />
      <AboutUs />
      <LatestProperties />
      <Services />
      <PromotionalBanner />
      <AgentList />
      <Testimonials />
      <ClientBrands />
      <LatestBlog />
    </main>
  )
}