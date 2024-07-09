import React from 'react'
import Navbar from '../Navbar'
import Coure from '../Coure'
import Footer from '../Footer'
// import list from '../../../public/list.json'
const Courses = () => {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen">

        <Coure/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Courses
