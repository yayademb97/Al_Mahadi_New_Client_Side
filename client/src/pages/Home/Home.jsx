import React, { useState, useEffect } from "react";
import "../../style/home.css";

import Helmet from "../../components/Helmet/Helmet";
import Services from "../../services/Services";
import ProductList from "../../components/UI/ProductList/ProductList";
import products from "../../assets/data/products";
import Clock from "../../components/UI/Clock/Clock";

import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import heroImg from "../../assets/images/hero-img.png";
import counterImg from "../../assets/images/counter-timer-img.png"

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProduscts, setMobileProduscts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (oneProduct) => oneProduct.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (oneProduct) => oneProduct.category === "sofa"
    );

    const filteredMobileProducts = products.filter(
      (oneProduct) => oneProduct.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (oneProduct) => oneProduct.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (oneProduct) => oneProduct.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProduscts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  }, []);
  return (
    <Helmet title={"Accueil"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="">
              <div className="hero__content">
                <p className="hero__subtitle">
                  Les tendances qui cartonnent en {year}
                </p>
                <h2>Minimalisme & tendance : la combinaison parfaite</h2>
                <p>
                  Découvrez les produits les plus prisés cette année, alliant
                  innovation et design épuré. Que vous recherchiez des articles
                  de mode, des accessoires high-tech ou des indispensables du
                  quotidien, nous avons sélectionné pour vous ce qu’il y a de
                  mieux.
                </p>

                <motion.button whileHover={{ scale: 1.2 }} className="buy__btn">
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

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Produits Populaires</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Les Plus Vendus</h2>
            </Col>

            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Offre Limitiée</h4>
                <h3 className="text-white fs-5 mb-3">Meubles de Qualités</h3>
              </div>
                  <Clock />

                  <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn">
                    <Link to={`/shop`}>Visiter Notre Boutique</Link>
                  </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
                <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Derniers Arrivages</h2>
            </Col>

            <ProductList data={mobileProduscts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
      <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Meilleures Ventes Par Catégorie</h2>
            </Col>

            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
