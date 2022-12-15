import React from "react";
import {
  Row,
  Col,
  Container,
  ListGroup,
  Nav,
  InputGroup,
  Form,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Row>
        <Container className=" bg-dark text-light">
          <Row className="p-4">
            <Col sm={12} md={6} lg={4}>
              <ListGroup.Item as="h3" className="text-warning">
                INFORMATION
              </ListGroup.Item>
              <ListGroup.Item title="ABOUT US" as="p" className="about-text">
                Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
                tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud.
              </ListGroup.Item>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <ListGroup.Item as="h3" className="text-warning">
                <LinkContainer to="/">
                  <Nav.Link>Links</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item title="ABOUT US" as="li" className="about-text">
                <LinkContainer to="/">
                  <Nav.Link>ABOUT US</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item title="ABOUT US" as="li" className="about-text">
                <LinkContainer to="/">
                  <Nav.Link>CONTACT US</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item title="ABOUT US" as="li" className="about-text">
                <LinkContainer to="/">
                  <Nav.Link>WORK WITH US</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item title="ABOUT US" as="li" className="about-text">
                <LinkContainer to="/">
                  <Nav.Link>SIZE GUIDE</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
            </Col>

            <Col sm={6} lg={3}>
              <ListGroup.Item as="h3" className="text-warning">
                {/* <NewsletterForm /> */}
                NEWSLETTER
              </ListGroup.Item>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter your email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text
                  id="basic-addon2"
                  typeof="button"
                  className="bg-warning text-white cursor-pointer"
                >
                  Submit
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Container
          style={{
            width: "100vw",
            background: "#343a40",
            textAlign: "center",
            color: "white",
            alignItems: "center",
            fontSize: "1.2rem",
            padding: "1rem",
          }}
        >
          &copy; {new Date().getFullYear()}, Website. Made With React by
          <Nav.Link
            className="d-inline"
            target={"_blank"}
            href="https://github.com/AbdullahGhani1"
          >
            &nbsp;{`Abdullah Ghani`}
          </Nav.Link>
        </Container>
      </Row>
    </footer>
  );
}

export default Footer;
