import React from 'react'
import Helmet from "../../components/Helmet/Helmet"
import CommonSection from "../../components/UI/CommonSection/CommonSection"
import "../../style/checkout.css"
import { Container, Row, Col, Form, FormGroup } from "reactstrap"
import { useSelector } from "react-redux"


const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)


  return <Helmet title="Procéder au paiement">
      <CommonSection title="Procéder au paiement" />

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6>Informations de Facturation</h6>
              <Form className='billing__form'>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Entrez Votre nom complet" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Entrez Votre mail" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Numéro de Téléphone" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Adresse: (Région/Ville)" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Adresse: (Commune/Quartier/Cité)" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Code Postal: " />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Rue: / Porte: " />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>Quantité Totale: <span>{totalQty} articles</span></h6>
                <h6>Total des articles: <span>{totalAmount} FCFA</span></h6>
                <h6>Taxe TVA: <span>18%</span></h6>
                <h6>Frais de Livraison: <span>1000 FCFA</span></h6>
                <h4>Montant total à payer: <span>{totalAmount} FCFA</span></h4>

                <button className="buy__btn auth__btn w-100">
                  Passer la commande
                </button>
              </div>
            </Col>       
          </Row>
        </Container>
      </section>
  </Helmet>
}

export default Checkout
