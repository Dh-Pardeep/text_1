import React from 'react'
import './App.css'
import HeaderNav from './components/common/HeaderNav'
import Hero from './components/view/Hero'
import TopNft from './components/view/TopNft'
import ExploreNft from './components/view/ExploreNft'
import MarketPlace from './components/view/MarketPlace'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryNavTabs from './components/view/CategoryNavTabs'
function App() {


  return (
    <div className='bg-[#FAFAFA]'>
      <HeaderNav />
      <Hero />
      <TopNft />
      <ExploreNft />
      <MarketPlace />
      <CategoryNavTabs/>
    </div>
  )
}

export default App
