import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.css";
function Products({ product }) {
  return (
    <Container>
      <Card className="my-3 me-auto rounded">
        <Link to={`/products/${product._id}`}>
          <Card.Img
            className="productImage"
            src={product.image}
            onMouseOver={(event) => (event.target.src = product.image2)}
            onMouseOut={(event) => (event.target.src = product.image)}
            variant="top"
          />
        </Link>
        <Card.Body>
          <Link
            to={`/products/${product._id}`}
            style={{ color: "red", textDecoration: "none" }}
          >
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h4">PKR&nbsp;{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Products;
