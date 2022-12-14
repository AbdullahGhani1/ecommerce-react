import React from "react";
import { Row, Col } from "react-bootstrap";
import Products from "./Products";
import products from "../../data/products";
function AllProducts() {
  return (
    <div>
      <Row>
        {products.map((product) => {
          return product.category === "Shoes" ? (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Products product={product} />
            </Col>
          ) : null;
        })}
      </Row>
    </div>
  );
}

export default AllProducts;
