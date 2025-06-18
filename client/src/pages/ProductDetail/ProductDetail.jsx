import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import products from "../../assets/data/products";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import ProductList from "../../components/UI/ProductList/ProductList"
import "../../style/product-details.css"
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {

  const [tab, setTab] = useState('desc')
  const [rating, setRating] = useState(null)
  const reviewUser = useRef("")
  const reviewMsg = useRef("")
  const { id } = useParams();
  const dispatch = useDispatch()
  const product = products.find((item) => item.id === id);

  const { 
    imgUrl, 
    productName, 
    price, 
    avgRating, 
    reviews, 
    description, 
    shortDesc, 
    category 

  } = product;
  
  const relatedProducts = products.filter(item => item.category === category)

  const submitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg  = reviewMsg.current.value

  }

  const addToCart = () => {
    dispatch(cartActions.addItems({
      id,
      image: imgUrl,
      productName,
      price,

    }))
  }

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt={"product of" + productName} />
            </Col>

            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>

                  <p>(<span>{avgRating}</span> Évaluation client)</p>
                </div>

                <div className="d-flex align-items-center gap-5">                 
                  <span className="product__price">{price} FCFA</span>
                  <span>Catégorie: {category.toUpperCase()}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn" onClick={addToCart}>Ajouter au Panier</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                  <h6 className={`${tab === "desc" ? "active__tab" : ""}`} onClick={() => setTab("desc")}>À propos de cet article</h6>
                  <h6 className={`${tab === "rev" ? "active__tab" : ""}`}  onClick={() => setTab("rev")}>Avis client ({reviews.length})</h6>
              </div>

              {
                tab === "desc" ? <div className="tab__content mt-5">
                                    <p>{description}</p>
                                 </div> : (
                                  <div className="product__review mt-5">
                                    <div className="review__wrapper">
                                      <ul>
                                        {
                                          reviews.map((item, index) => (
                                            <li key={index} className="mb-4">

                                              <h6>Aly Tolo</h6>
                                              <span>{item.rating} (moyenne des avis)</span>
                                              <p>{item.text}</p>
                                            </li>
                                          ))
                                        }
                                      </ul>


                                      <div className="review__form">
                                        <h4>Partagez Votre Expérience</h4>
                                          <form action="" onSubmit={submitHandler}>
                                            <div className="form__group">
                                              <input type="text" placeholder="Entrez Votre Nom" ref={reviewUser} />
                                            </div>

                                            <div className="form__group d-flex align-items-center gap-5">
                                              <span onClick={() => setRating(1)}>1<i class="ri-star-s-fill"></i></span>
                                              <span onClick={() => setRating(2)}>2<i class="ri-star-s-fill"></i></span>
                                              <span onClick={() => setRating(3)}>3<i class="ri-star-s-fill"></i></span>
                                              <span onClick={() => setRating(4)}>4<i class="ri-star-s-fill"></i></span>
                                              <span onClick={() => setRating(5)}>5<i class="ri-star-s-fill"></i></span>
                                            </div>

                                            <div className="form__group">
                                              <textarea
                                                ref={reviewMsg}
                                                rows={4}
                                                type="text" placeholder="Que penses-tu de cet article ?" />
                                            </div>

                                            <button type="submit" className="buy__btn">Soumettre</button>
                                          </form>
                                      </div>
                                    </div>
                                  </div>
                                 )
              }

              
            </Col>


            <Col lg="12" className="mt-5">
              <h2 className="related__title">Vous aimerez aussi</h2>
            </Col>

            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetail;
