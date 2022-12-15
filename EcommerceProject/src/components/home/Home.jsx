import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import products from "../../data/products";
import Products from "../products/Products";
import Slider from "../Slider";
function Home() {
  return (
    <section>
      <Slider />
      <Container className="mx-3">
        <Row>
          <h1
            style={{ width: "240px", textAlign: "center" }}
          >{`NEW Arrival`}</h1>
        </Row>
        <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
        <Row>
          {products.map((product) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Products product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Home;
