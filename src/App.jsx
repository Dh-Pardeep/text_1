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
import UpcommingCard from './components/view/UpcommingCard'
import BackToTop from './components/common/BackToTop'
import LoaderHome from './components/common/LoaderHome'
import LatestNews from './components/view/LatestNews'
import JoinOurCommunity from './components/view/JoinOurCommunity'
import Comments from './components/view/Comments'
import Footer from './components/common/Footer'
function App() {


  return (
    <div className='bg-[#FAFAFA]'>
      <HeaderNav />
      <Hero />
      <TopNft />
      <ExploreNft />
      <MarketPlace />
      <CategoryNavTabs/>
      <UpcommingCard/>
      <LatestNews/>
      <JoinOurCommunity/>
      <Comments/>
      <Footer/> 
      {/* <BackToTop/>
      <LoaderHome/> */}
    </div>
  )
}

export default App
