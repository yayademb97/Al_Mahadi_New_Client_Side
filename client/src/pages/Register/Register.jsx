import React, { useState } from 'react'
import "../../style/login.css"
import Helmet from "../../components/Helmet/Helmet"
import CommonSection from "../../components/UI/CommonSection/CommonSection"
import { Link } from "react-router-dom"
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'

const Register = () => {

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [file, setFile] = useState(null)


  return <Helmet title="S'Inscrire">
        <section>
          <Container>
            <Row>
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">S'Inscrire</h3>

                <Form className="auth__form">
                  <FormGroup className="form__group">
                    <input type="text" value={userName} onChange={(e) =>setUserName(e.target.value)} placeholder="Nom d’utilisateur" />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Entrer Votre mail" />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="Entrer Votre mot de passe" />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input type="file" onChange={(e) =>setFile(e.target.files[0])} />
                  </FormGroup>

                  <button type='submit' className="buy__btn auth__btn">
                    S'Inscrire
                  </button>
                  <p>Déjà client sur Al Mahadi ? <Link to={`/login`}>Connectez-vous ici</Link></p>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
  </Helmet>
}

export default Register
