import React from 'react'
import "../../style/home.css"

import Helmet from '../../components/Helmet/Helmet'
import Services from '../../services/Services'

import { Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import heroImg from "../../assets/images/hero-img.png"

const Home = () => {

  const year = new Date().getFullYear()
  return (
    <Helmet title={"Accueil"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="">
              <div className="hero__content">
                <p className="hero__subtitle">Les tendances qui cartonnent en {year}</p>
                <h2>Minimalisme & tendance : la combinaison parfaite</h2>
                <p>
                  Découvrez les produits les plus prisés cette année, 
                  alliant innovation et design épuré. Que vous recherchiez des articles de mode, 
                  des accessoires high-tech ou des indispensables du quotidien, 
                  nous avons sélectionné pour vous ce qu’il y a de mieux.
                </p>

                <motion.button whileTap={{ scale: 1.2 }}  className="buy__btn">
                  <Link to="/shop">Découvrir maintenant</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
    </Helmet>
  )
}

export default Home
