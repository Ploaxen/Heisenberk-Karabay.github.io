import React from 'react';
import logo from "./logo.jpg";

const Navbar = () => {
    return(
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src= {logo} alt="" width="40" height="40" class="d-inline-block align-text-top"/>
          Konumsal Bilgi Topluluğu
        </a>
      </div>
    </nav>
    )
};

export default Navbar