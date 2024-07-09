import React from 'react'
import Navbar from './Navbar'
import list from '../../public/list.json'
import { NavLink } from 'react-router-dom'
import Card from './Card'
const Coure = () => {

  return (
    <div>
        {/* <Navbar/> */}
        <div className="max-w-screen-2xl container mx-auto ms:px-20 px-4"></div>
<div className=' px-20 items-center justify-center text-center mt-5'>
    <h1 className='mb-5'>we are delighted to have you <span className='text-pink-500 text-center'>Here:)</span>
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolores ipsa excepturi iste non officia maiores suscipit mollitia tempore facilis explicabo veritatis ipsam repudiandae, odio error et aliquid architecto labore quia, eveniet ex ab optio. Dignissimos tenetur distinctio ipsa quos!</p>
 <NavLink to='/'><button className='bg-pink-500 text-white px-4 py-2 mt-3 rounded-md'>Back</button></NavLink> 
</div>



<div className='mt-12  grid grid-cols-1 md:grid-cols-3'>
    {
        list.map((item)=>{
            return(
                <> <Card item={item} key={item.id}/>
                </>
            )
        })
    }
</div>

    </div>
  )
}

export default Coure
