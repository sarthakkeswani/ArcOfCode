import React from "react";
import "./ContLanguage.css";
const ContLanguage = () => {
  return (
    <div className="lang-back d-flex justify-content-center align-items-center">
      <nav class="navbar navbar-expand-sm  ">
        <ul class="navbar-nav me-auto d-flex flex-wrap justify-content-center">
          <li class="nav-item lang-box">
            <a class="nav-link hovertext" href="/C++">
              C++
            </a>
          </li>

          <li class="nav-item lang-box">
            <a class="nav-link hovertext" href="#">
              Python
            </a>
          </li>
          <li class="nav-item lang-box">
            <a class="nav-link hovertext" href="#">
              Java
            </a>
          </li>
          <li class="nav-item lang-box">
            <a class="nav-link" href="#">
              C
            </a>
          </li>
          <li class="nav-item lang-box">
            <a class="nav-link" href="#">
              Java
            </a>
          </li>
          <li class="nav-item lang-box">
            <a class="nav-link" href="#">
              R
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ContLanguage;
