import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { motion } from 'framer-motion'

import logo from "../../assets/images/logo_mahadi.png"
import userIcon from "../../assets/images/user-icon.png"

import { Container, Row } from 'reactstrap'

const nav__links = [
  {
    path: "/home",
    display: "Acceuil"
  },
  {
    path: "/shop",
    display: "Boutique"
  },
  {
    path: "/cart",
    display: "Panier"
  }
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div className="logo__text">
                <h1>Al Mahadi</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {
                  nav__links.map((link, index) => (
                    <li className="nav__item" key={index}>
                        <NavLink to={link.path} className={(navClass)=>navClass.isActive ? "nav_active" : ""}>{link.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="nav__icons">

              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">2</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">2</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
