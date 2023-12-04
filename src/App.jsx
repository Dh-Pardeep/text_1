import React, { useEffect } from 'react'
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
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    })
  }, [])
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  return (
    <div className='bg-[#FAFAFA] overflow-hidden'>
      <HeaderNav />
      <Hero />
      <TopNft />
      <ExploreNft />
      <MarketPlace />
      <CategoryNavTabs />
      <UpcommingCard />
      <LatestNews />
      <JoinOurCommunity />
      <Comments />
      <Footer />
      {/* <BackToTop/>
      <LoaderHome/> */}
    </div>
  )
}

export default App
