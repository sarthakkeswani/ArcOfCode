import React from 'react'
import './NavbarAoc.css'
const NavbarAoc = () => {
  return (
    <>

 
    <nav class="navbar navbar-expand-sm " id="mainNav">
    <div class="container-fluid">
      <a class="navbar-brand" href="javascript:void(0)">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active " href="#">Coding</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Developement</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Interaction</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Discuss</a>
          </li>
        </ul>
        <ul class="list-unstyled">
        <li class="nav-item ">
            <a class="nav-link px-3" href="#" style={{marginTop: 10}}>Profile</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      
  </>
  )
}

export default NavbarAoc
