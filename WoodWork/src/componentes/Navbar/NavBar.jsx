//NavBar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <div style={{width:36, height:36, borderRadius:8, background:'#8FA68E', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', marginRight:10}}>WW</div>
          <div>
            <strong>WoodWork</strong>
            <div className="small text-muted">Orçamentos para marcenaria</div>
          </div>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#catalog">Catálogo</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">Sobre</a></li>
            <li className="nav-item"><a className="nav-link btn btn-outline-primary ms-2" href="#login">Entrar</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
