import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
const Free = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    const data=list.filter((data)=>data.category=="free");
  return (
    <div className='m-5'>
      <h1>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos explicabo suscipit, quam delectus expedita adipisci autem et ipsam cupiditate blanditiis quod libero quae molestias optio quo voluptatibus tempora nesciunt magni!</p>


      <div className='container'>
      <Slider {...settings}>
    {data.map((item)=>{
      return(
        <>
        <Card item={item} key={item.id}/>
        </>
      )
    })}
    </Slider>
      </div>
    </div>
  )
}

export default Free
