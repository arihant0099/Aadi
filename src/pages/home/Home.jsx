import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import HomeInfoBox from "./HomeInfoBox";
import "./Home.scss";
import Category from '../../components/Hero/Category';
import HomeSecCarsouel from "../../components/HomeSecCarousel/HomeSecCarsouel";
import {mens_kurta} from "../../components/Data/mens_kurta";
import {Mens_Shirt} from "../../components/Data/Mens_Shirt";
import {dressPage1} from "../../components/Data/dressPage1";

const PageHeading = ({heading, btnText})=>{
  return(
    <>
    <div className="mt-32 --flex-between ">
      <h2 className='text-4xl'>{heading}</h2>
      <button className='--btn '>
        {btnText}
      </button>
    </div>
    <div className="--hr"></div>
    </>
  )
};

const home = () => {
  return (
    <div>
      <Carousel/>
      <section>
      <div className="container">
          <HomeInfoBox/>
          <Category/>
          <PageHeading heading={"Latest Products"} btnText={"Shop Now"}/>
      </div>
      <div className='container space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSecCarsouel data={mens_kurta} section_Name='mens_kurta'/>
          <HomeSecCarsouel data={dressPage1} section_Name='dressPage1'/>
          <HomeSecCarsouel data={Mens_Shirt} section_Name='Mens_Shirt'/>
      </div>
      </section>
    </div>
  );
}

export default home;
