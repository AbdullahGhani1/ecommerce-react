import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image, Form, ListGroup } from "react-bootstrap";
import products from "../../data/products";

function Cart() {
  const params = useParams();
  const [qty, setQty] = useState(1);

  const product = products.find(
    (product) => product._id.toString() === params.id
  );

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col md={2}>
                <Image src={product.image} alt={product.name} fluid rounded />
              </Col>
              <Col md={3}>
                <Link to={`/products/${product._id}`}>{product.name}</Link>
              </Col>
              <Col md={2}>PKR {product.price}</Col>
              <Col md={2}>
                <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
              <Col md={2}>
                <Button
                  type="button"
                  variant="light"
                  onClick={() => console.log("delete")}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={4}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h2>Subtotal items</h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button type="button" className="btn-block">
              Proceed To Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Cart;
