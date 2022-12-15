import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { Cart } from "../context/Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbars() {
  const { cart } = useContext(Cart);
  const user = localStorage.getItem("user");
  const { login, setLogin } = useState(user);
  console.log("user", user);
  const navigate = useNavigate();
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Ecommerce</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to="products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="apiTable">
                <Nav.Link>ApiTable</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
              <LinkContainer to="cart">
                <Nav.Link>
                  <FaShoppingCart />
                  &nbsp;Cart
                  <p
                    style={{
                      position: "relative",
                      top: -41,
                      left: 36,
                      height: 25,
                      width: 25,
                      backgroundColor: "red",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    {cart.length}
                  </p>
                </Nav.Link>
              </LinkContainer>
              {user ? (
                <LinkContainer to="/logout">
                  <Nav.Link>
                    <FaUserCircle />
                    &nbsp;LogOut
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaUserCircle />
                    &nbsp;Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navbars;
