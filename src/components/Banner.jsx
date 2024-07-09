import React from 'react'
import banner from '../../public/banner.jpg'
const Banner = () => {
  return (
    <>
      <div className='flex  md:flex-row container  
       mt-25 m-8' >
        <div className=" w-full   md:w-1/2 left pt-5">
        <h1 className='text-2xl font-bold mb-8 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing <span className='text-pink-500'>elit. Quae?</span> </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod dolores ratione unde quam? Beatae praesentium esse nulla modi quidem quasi, voluptate numquam ipsa? Minima placeat error officia molestias repellendus officiis, totam inventore ipsam fugiat delectus fuga, iusto cum modi?</p>
       
        <label className="input input-bordered flex items-center gap-2 mt-5">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
<button className='btn btn-secondary mt-6'>Secondary</button>
        </div>
        <div className=" w-full md:w-1/2  right">
        <img src={banner} className='' alt="" />
        </div>
      
      </div>
    
    </>
  
  )
}

export default Banner
