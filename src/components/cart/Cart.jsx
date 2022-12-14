import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Image,
  Form,
  ListGroup,
  Container,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { Cart } from "../../context/Context";

function CartPage() {
  const { cart, setCart } = useContext(Cart);
  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cart.length !== 0
            ? cart.map((product) => {
                return (
                  <ListGroup variant="flush" key={product._id}>
                    <ListGroup.Item>
                      <Row>
                        <Col md={2} sm={2}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col md={3} sm={2}>
                          <Link to={`/products/${product._id}`}>
                            {product.name}
                          </Link>
                        </Col>
                        <Col md={2} sm={3}>
                          PKR {product.price * product.qty}
                        </Col>

                        <Col md={2} sm={2}>
                          <Form.Control
                            as="select"
                            value={product.qty}
                            onChange={(e) =>
                              setCart(
                                cart.map((item) =>
                                  item._id === product._id
                                    ? { ...item, qty: e.target.value }
                                    : { ...item }
                                )
                              )
                            }
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                        <Col md={2} sm={3}>
                          <Button
                            type="button"
                            variant="light"
                            onClick={() =>
                              setCart(
                                cart.filter((item) => item._id !== product._id)
                              )
                            }
                          >
                            <AiFillDelete />
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })
            : null}
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Subtotal items</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/checkout">
                <Button type="button" className="btn-block">
                  Proceed To Checkout
                </Button>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
