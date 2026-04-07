import React,{Fragment} from 'react'
import Hero from "../../Components/HomeComponents/Hero"
import FeaturedBooks from "../../Components/HomeComponents/FeaturedBooks"
import CategoriesSection from "../../Components/HomeComponents/CategoriesSection"
import TrendingBooks from "../../Components/HomeComponents/TrendingBooks"
import WhyChoose from  "../../Components/HomeComponents/WhyChoose"

const Home = () => {
  return (
    <Fragment>
      <Hero/>
      <FeaturedBooks/>
      <CategoriesSection/>
      <TrendingBooks/>
      <WhyChoose/>
    </Fragment>
  )
}

export default Home