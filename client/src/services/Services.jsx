import React from 'react'
import "./services.css"
import { Container, Col, Row } from 'reactstrap'
import { motion } from 'framer-motion'
import serviceData from '../assets/data/serviceData'

const Services = () => {
  return <section className="services">
    <Container>
        <Row>
            {
                serviceData.map((oneService, index) => (
                    <Col lg="3" md="4" key={index}>
                        <motion.div whileHover={{ scale: 1.1 }} className="service__item" style={{ background: `${oneService.bg}` }}>
                            <span className="">
                                <i class={oneService.icon}></i>
                            </span>
                            <div>
                                <h3>{oneService.title}</h3>
                                <p>{oneService.subtitle}</p>
                            </div>
                        </motion.div>
                    </Col>
                ))
            }
        </Row>
    </Container>
  </section>
}

export default Services
