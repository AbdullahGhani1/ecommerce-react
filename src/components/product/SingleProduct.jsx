import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image, Form, ListGroup } from "react-bootstrap";
import products from "../../data/products";
import { useState } from "react";
function SingleProduct() {
  const navigate = useNavigate();
  const params = useParams();
  const [qty, setQty] = useState(1);
  const product = products.find(
    (product) => product._id.toString() === params.id
  );
  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
  };
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>PKR {product.price}</Col>
                <Col className="text-success">
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              className="text-left justify-content-start"
              as="div"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            {product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Quantity</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((val) => (
                        <option key={val + 1} value={val + 1}>
                          {val + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <Button
                onClick={addToCartHandler}
                className="btn btn-dark text-light"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default SingleProduct;
