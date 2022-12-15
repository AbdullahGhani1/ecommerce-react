import React from "react";
import { Button, Col, Container, Fade, Image, Row } from "react-bootstrap";
import Data from "../../assets/images/camera.jpg";
import head from "../../assets/images/header.jpg";
function About() {
  return (
    <Fade in={true}>
      <Container>
        <Row className="mb-5">
          <Col>
            <img
              src={head}
              alt=""
              style={{
                width: "100%",
                height: "50vh",
                objectFit: "cover",
                objectPosition: "center",
              }}
            ></img>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              sint ab sapiente repudiandae, officiis quo, at pariatur unde
              aperiam, ut numquam quas molestias nulla? Quam ducimus iusto
              similique laboriosam earum quis quaerat optio, id, corrupti enim
              sint dicta repellendus eos alias magnam nam et quasi maxime vel?
              Natus, beatae voluptatem, eveniet magni ducimus nam cum aspernatur
              commodi fugiat recusandae exercitationem quod velit rerum ab sit
              sint laboriosam! Nam praesentium molestiae maxime accusamus veniam
              omnis! Iste sed mollitia id possimus beatae.
            </p>
            <Button
              variant="outline-light"
              className="my-3 btn btn-secondary btn-lg"
            >
              Read More
            </Button>
          </Col>
          <Col md={6} sm={12}>
            <Image src={Data} alt="" srcset="" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </Fade>
  );
}

export default About;
