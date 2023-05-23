import React from 'react'
import  "./ContentAOC.css";

const ContentAOC = () => {
  return (
    <div className='displayWidth'>
    <nav class="navbar navbar-expand-sm">
    <div class="container-fluid d-flex flex-wrap ">


        <ul class="navbar-nav me-auto content ">
          <li class="nav-item">
            <a class="nav-link content-active" href="#">Learn</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Practice</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contest</a>
          </li>
        </ul>
        <ul class="disp-flex navbar-nav">
        <li class="nav-item ">
            <a class="nav-link px-3" href="#">Streak</a>
          </li>
        <li class="nav-item ">
            <a class="nav-link px-3" href="#">Map</a>
          </li>
        </ul>
      </div>

  </nav>
    </div>
  )
}

export default ContentAOC
