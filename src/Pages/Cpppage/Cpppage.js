import React from 'react'
import "./Cpp.css"

const Cpppage = () => {
  return (
    <div className='pageCpp-box'>
    <h5>C++</h5>
      <div className='d-flex flex-wrap justify-content-center'>
      <nav class="navbar navbar-expand-sm  ">
    <ul class="navbar-nav me-auto d-flex flex-wrap justify-content-center">
      <li class="nav-item cpp-box">
        <a class="nav-link hovertext" href="/C++">DOCS</a>
      </li>
      
      <li class="nav-item cpp-box">
        <a class="nav-link hovertext" href="#"> Video</a>
      </li>
      <li class="nav-item cpp-box">
        <a class="nav-link hovertext" href="#">Fast Track</a>
      </li>
      <li class="nav-item cpp-box">
        <a class="nav-link" href="#">Notes</a>
      </li>
      <li class="nav-item cpp-box">
        <a class="nav-link" href="#">Courses</a>
      </li>
    </ul>

</nav>
      </div>

<div className='d-flex flex-wrap syknotop justify-content-center'>


      <div className='syllabus-box d-flex justify-content-center'>
      <div>

      <h6 className='syllborbox'>Syllabus</h6>
      </div>
      
      </div>
      <div className='overView-box'>Overview</div>
      </div>
    </div>

  )
}

export default Cpppage
