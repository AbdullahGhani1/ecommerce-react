import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image, Form, ListGroup } from "react-bootstrap";
import products from "../../data/products";
import { useState } from "react";
import { useContext } from "react";
import { Cart } from "../../context/Context";
function SingleProduct() {
  const params = useParams();
  const [qty, setQty] = useState(1);
  const product = products.find(
    (product) => product._id.toString() === params.id
  );
  const addToCartHandler = () => {
    // navigate(`/cart/${params.id}?qty=${qty}`);
    let productExist = cart.find((item) => item._id === product._id);
    if (productExist === undefined) {
      setCart([...cart, { ...product, qty }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, qty }])
      );
    } else {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + qty }
            : { ...item }
        )
      );
      localStorage.setItem("cart", JSON.stringify(cart));

      console.log("ekse", cart);
    }
  };

  const { cart, setCart } = useContext(Cart);
  console.log(cart);
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
