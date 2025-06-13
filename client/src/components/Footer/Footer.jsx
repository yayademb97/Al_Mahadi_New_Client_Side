import React from 'react'
import "./footer.css"
// import logo from "../../assets/images/logo_mahadi.png"

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'


const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg="4">
            <div className="logo">
              <div className="logo__text">
                <h1 className="text-white">Al Mahadi</h1>
              </div>

            </div>
              <p className="footer__text mt-4">
                Al Mahadi révolutionne le commerce digital au Mali en offrant une marketplace locale, 
                sécurisée et adaptée aux besoins des vendeurs et acheteurs. 
                Profitez d’une expérience fluide et d’un service optimisé.
              </p>
        </Col>
        <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Accès Catégories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Téléphones Mobiles</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Canapé Moderne</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Fauteuil</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Montres Intélligentes</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
        </Col>
        <Col lg="2">
        <div className="footer__quick-links">
              <h4 className="quick__links-title">Liens Utiles</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={`/shop`}>Boutiques</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to={`/cart`}>Panier</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to={`/login`}>Se Connecter</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to={`/#`}>Politique de Confidentialité</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
        </Col>
        <Col lg="3">
        <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Niaréla, Rue: 438, Porte: 911</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  <p>+223 202 16 644</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  <p>al-mahadi@company.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
        </Col>

        <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} dévéloppé par Yaya DEMBELE.
              Tous droits réservés
            </p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer
