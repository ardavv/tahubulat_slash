import React from 'react';
import "../style/homeLogin.css";
import { Card, Container, Row, Col, ButtonGroup, Dropdown, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from '../components/NavigationBar.js';
import loops from '../assets/img/loops.jpg';
import variables from '../assets/img/variables.jpg';
import ifelse from '../assets/img/ifelse.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Learning(props) {
    return (
        <>
            <Navbar activeKey='/learning' />
            <div className='homeBG'>
                <h1>Video Pembelajaran</h1>
                <Row className='border'>
                    <Col>
                        <Dropdown data-bs-theme="dark">
                            <Dropdown.Toggle variant="secondary" style={{ backgroundColor: '#AB47BC' }}>
                                Category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" active>
                                    Beginner
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Expert</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-4">Change your level</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button>
                                Search
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Active Task</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>
                                            Watch Video How to Make Music
                                        </li>
                                        <li>
                                            Doing Task
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h1>Step Into Magical World</h1>

                <Container className='carousels'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        focusOnSelect={true}
                    >
                        <div className=''>
                            <Card>
                                <Card.Img variant="top" src={variables} />
                                <Card.Body>
                                    <Card.Title>wow</Card.Title>
                                    <Card.Text>
                                        woe
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <Card.Img variant="top" src={ifelse} />
                                <Card.Body>
                                    <Card.Title>wow</Card.Title>
                                    <Card.Text>
                                        woe
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <Card.Img variant="top" src={loops} />
                                <Card.Body>
                                    <Card.Title>wow</Card.Title>
                                    <Card.Text>
                                        woe
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <Card.Img variant="top" src={ifelse} />
                                <Card.Body>
                                    <Card.Title>wow</Card.Title>
                                    <Card.Text>
                                        woe
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel>;
                </Container>
            </div>
        </>
    );
}

export default Learning;
