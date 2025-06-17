import React, { useState } from "react";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import { Container, Col, Row } from "reactstrap";
import "../../style/shop.css"

import products from "../../assets/data/products"
import ProductList from "../../components/UI/ProductList/ProductList"

const Shop = () => {

  const [productsData, setProductsData] = useState(products)


  //? Filtering Feature By Product Category
  const handlerFilter = e => {
    const filterValue = e.target.value
    //! Filter By Sofa Feature
    if (filterValue === "sofa") {
      const filteredProduct = products.filter((item) => item.category === "sofa");
      setProductsData(filteredProduct)
    }

    //! Filter By Mobile Feature
    if (filterValue === "mobile") {
      const filteredProduct = products.filter((item) => item.category === "mobile");
      setProductsData(filteredProduct)
    }

    //! Filter By Chair Feature

    if (filterValue === "chair") {
      const filteredProduct = products.filter((item) => item.category === "chair");
      setProductsData(filteredProduct)
    }


    //! Filter By Watch Feature

    if (filterValue === "watch") {
      const filteredProduct = products.filter((item) => item.category === "watch");
      setProductsData(filteredProduct)
    }


    //! Filter By Wireless Feature

    if (filterValue === "wireless") {
      const filteredProduct = products.filter((item) => item.category === "wireless");
      setProductsData(filteredProduct)
    }
  }

  //? Searching Feature By Product
  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  return (
    <Helmet title="Boutique">
      <CommonSection title="Produits" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4">
              <div className="filter__widget">
                <select onChange={handlerFilter}>
                  <option>Filtrer Par Catégorie</option>
                  <option value="sofa">Canapé</option>
                  <option value="mobile">Smartphone</option>
                  <option value="chair">Fauteuil</option>
                  <option value="watch">Montres</option>
                  <option value="wireless">Écouteurs sans fil</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Trier Par</option>
                  <option value="ascending">Du moins cher au plus cher</option>
                  <option value="desceding">Du plus cher au moins cher</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                  <input type="text" placeholder="Trouver un produit..." onChange={handleSearch} />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {
              productsData.length === 0? <h1>Aucun résultat pour cette catégorie!</h1>
              : (
                <ProductList data={productsData} />
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
