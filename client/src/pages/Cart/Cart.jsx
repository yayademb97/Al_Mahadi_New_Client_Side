import React from 'react'
import "../../style/cart.css";
import Helmet from "../../components/Helmet/Helmet"
import CommonSection from "../../components/UI/CommonSection/CommonSection"
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

import tdImg from "../../assets/images/arm-chair-01.jpg"
import { motion } from "framer-motion"
import { cartActions } from "../../redux/slices/cartSlice"
import { useSelector, useDispatch } from "react-redux"

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)



  return <Helmet title= "Panier">
    <CommonSection title="Mon Panier" />

    <section>
      <Container>
        <Row>
          <Col lg="9">
            {
              cartItems.length === 0 ? <h2 className='fs-2 text-center'>Aucun article ajouté au Panier</h2> :
              <table className='table bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Produit</th>
                  <th>Produit</th>
                  <th>Quantité</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {
                  cartItems.map((item, index) => (
                    <Tr item={item} key={index} />
                  ))
                }
              </tbody>
            </table>
            }
          </Col>
          <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Total des articles <span className="fs-4 fw-bold">{totalAmount} FCFA</span>
                </h6>
                
              </div>
              <p className="fs-6 mt-2">Le total final (avec taxes et frais de livraison) sera affiché à la dernière étape</p>

              <div>
                <button className="buy__btn w-100">
                  <Link to={`/checkout`}>Valider mon panier</Link>
                </button>
                <button className="buy__btn w-100 mt-3">
                  <Link to={`/shop`}>Poursuivre mes achats</Link>
                </button>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

const Tr = ({ item }) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return(
    <tr>
        <td>
          <img src={item.image} alt="" />
        </td>
        <td>{item.productName}</td>
        <td>{item.price} FCA</td>
        <td>x {item.quantity}</td>
        <td>
          <motion.i whileTap={{ scale: 1.2 }} class="ri-delete-bin-line" onClick={deleteProduct}></motion.i>
        </td>
    </tr>
  )
}

export default Cart
