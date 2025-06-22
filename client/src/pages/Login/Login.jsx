import React, { useState } from 'react'
import "../../style/login.css"
import Helmet from "../../components/Helmet/Helmet"
import CommonSection from "../../components/UI/CommonSection/CommonSection"
import { Link } from "react-router-dom"
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return <Helmet title="Se Connecter">
        <section>
          <Container>
            <Row>
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Se Connecter</h3>

                <Form className="auth__form">
                  <FormGroup className="form__group">
                    <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Entrer Votre mail" />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="Entrer Votre mot de passe" />
                  </FormGroup>

                  <button type='submit' className="buy__btn auth__btn">
                    Se Connecter
                  </button>
                  <p>Vous n’avez pas encore de compte ? <Link to={`/register`}>Créer un compte</Link></p>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
  </Helmet>
}

export default Login
