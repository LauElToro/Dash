import React from 'react';
import "/components/css/nav.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav'>
        <div className='nav_container'>
            <ul className="dropdown">
                <div className='navP'>MENU</div>
                <li className="dropdown_list">
                    <img src="/svg/Dashboard.svg" className='dropdown_icon' alt="Dashboard Icon" />
                    <NavLink to="/" className='dropdown_link'>
                      <span className="dropdown_span">Dashboard</span>
                    </NavLink>
                </li>
                <li className="dropdown_list">
                    <div className='dropdown_div'>
                        <img src="/svg/Profile.svg" className='dropdown_icon' alt="Profile Icon" />
                        <NavLink to="#" className='dropdown_link'>
                            <span className="dropdown_span">Perfil</span>
                            <input type="checkbox" className='dropdown_check'/>
                        </NavLink>
                    </div>
                    <div className="dropdown_content">
                        <ul className="dropdown_sub">
                            <li className="dropdown_li">
                                <NavLink to="/secciones" className="dropdown_anchor">Secciones</NavLink>
                            </li>
                            <li className="dropdown_li">
                                <NavLink to="/productos" className="dropdown_anchor">Productos</NavLink>
                            </li>
                            <li className="dropdown_li">
                                <NavLink to="/datos-generales" className="dropdown_anchor">Datos Generales</NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="dropdown_list">
                    <img src="/svg/Dashboard.svg" className='dropdown_icon' alt="Subscriptions Icon" />
                    <NavLink to="/subscripciones" className='dropdown_link'>
                      <span className="dropdown_span">Subscripciones</span>
                    </NavLink>
                </li>
                <li className="dropdown_list">
                    <img src="/svg/Dashboard.svg" className='dropdown_icon' alt="Map Icon" />
                    <NavLink to="/mapa" className='dropdown_link'>
                      <span className="dropdown_span">Mapa</span>
                    </NavLink>
                </li>
                <li className="dropdown_list">
                    <img src="/svg/Dashboard.svg" className='dropdown_icon' alt="Reviews Icon" />
                    <NavLink to="/reseñas" className='dropdown_link'>
                      <span className="dropdown_span">Reseñas</span>
                    </NavLink>
                </li>
                <div className='navP'>OTHERS</div>
                <li className="dropdown_list">
                    <img src="/svg/Dashboard.svg" className='dropdown_icon' alt="Settings Icon" />
                    <NavLink to="/settings" className='dropdown_link'>
                      <span className="dropdown_span">Settings</span>
                    </NavLink>
                </li>
                <li className="dropdown_list">
                    <img src="/svg/Dashboard.svg" className='dropdown_icon' alt="Payment Icon" />
                    <NavLink to="/payment" className='dropdown_link'>
                      <span className="dropdown_span">Payment</span>
                    </NavLink>
                </li>
                <li className="dropdown_list">
                    <img src="/svg/Dashboard.svg" className='dropdown_icon' alt="Accounts Icon" />
                    <NavLink to="/accounts" className='dropdown_link'>
                      <span className="dropdown_span">Accounts</span>
                    </NavLink>
                </li>
                <li className="dropdown_list">
                    <img src="/svg/Dashboard.svg" className='dropdown_icon' alt="Help Icon" />
                    <NavLink to="/help" className='dropdown_link'>
                      <span className="dropdown_span">Help</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
