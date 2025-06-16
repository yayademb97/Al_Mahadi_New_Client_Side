import React, { useRef, useEffect } from 'react'
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

  const headerRef = useRef(null)

  const menuRef = useRef(null)

  const stickyHeaderFun = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__hearder')
      } else {
        headerRef.current.classList.remove('sticky__hearder')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFun()

    return () => window.removeEventListener('scroll', stickyHeaderFun)
  }, [])


  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div className="logo__text">
                <h1>AlMahadi</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
                <span className="badge">0</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">0</span>
              </span>
              <span>
                <motion.img whileHover={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
                <div className="mobile__menu">
                    <span onClick={menuToggle}>
                      <i class="ri-menu-line"></i>
                    </span>
              </div>
            </div>

            
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
