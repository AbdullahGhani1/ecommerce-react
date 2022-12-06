import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../data/products";
import Products from "../products/Products";
import Slider from "../Slider";
function Home() {
  return (
    <section>
      <Slider />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            backgroundColor: "black",
          }}
        />

        <div>
          <h1
            style={{ width: "240px", textAlign: "center" }}
          >{`NEW Arrival`}</h1>
        </div>

        <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
      </div>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Products product={product} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Home;
