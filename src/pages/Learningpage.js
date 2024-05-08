import React from 'react';
import "../style/homeLogin.css";
import { Card, Container, Row, Col, ButtonGroup, Dropdown, Form, Button, Stack, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from '../components/NavigationBar.js';
import loops from '../assets/img/loops.jpg';
import variables from '../assets/img/variables.jpg';
import ifelse from '../assets/img/ifelse.jpg';
import Carousel from "react-multi-carousel";
import buku from '../assets/img/buku.png'
import task from '../assets/img/task.png'
import video from '../assets/img/video.png'
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
        <div style={{ backgroundColor: 'white' }}>

            <Navbar activeKey='/learning' />
            <div className='homeBG' style={{ backgroundColor: 'white' }}>
                <div className='container'>
                    <Row >
                        <Col style={{ maxWidth: '300px' }}>
                            <Dropdown data-bs-theme="dark" >
                                <Dropdown.Toggle variant="secondary" className='dropdown-toggle' style={{ width: '200px', marginLeft: '30px', marginTop: '20px', fontWeight: 'bolder', backgroundColor: '#864AF9' }}>
                                    Category
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ width: '200px', marginTop: '5px' }}>
                                    <Dropdown.Item href="#/action-1" active style={{ fontWeight: 'bolder' }}>
                                        Beginner
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" style={{ fontWeight: 'bolder' }}>Intermediate</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" style={{ fontWeight: 'bolder' }}>Expert</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-4" style={{ fontWeight: 'bolder' }}>Change your level</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Stack gap={2}>

                                <div>
                                    <Form className="d-flex mt-4" >
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                            style={{ border: '3px solid black', borderRadius: '20px', fontWeight: 'bolder', width: '520px' }}
                                        />
                                        <Button style={{ border: '3px solid black', borderRadius: '20px', fontWeight: 'bolder', backgroundColor: '#864AF9' }}>
                                            Search
                                        </Button>
                                    </Form>
                                </div>
                                <div>
                                    <Link to="/baca">
                                        <Image src={buku} rounded className="site-logo m-1" style={{ width: '80px' }}/>
                                    </Link>
                                    <Link to="/task">
                                        <Image src={task} rounded className="site-logo m-1" style={{ width: '80px' }}/>
                                    </Link>

                                    <Link to="/video">
                                        <Image src={video} rounded className="site-logo m-1" style={{ width: '80px' }}/>
                                    </Link>


                                </div>
                            </Stack>
                        </Col>
                        <Col>
                            <Card style={{ width: '300px', backgroundColor: '#864AF9', marginLeft: '100px' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontWeight: 'bolder', fontSize: '30px', textAlign: 'center' }}>Active Task !</Card.Title>
                                    <Card.Text style={{ color: 'white', marginLeft: '-20px', fontSize: '18px' }}>
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
                </div>

                <div className='title container mt-4' style={{ textAlign: 'left' }}>
                    Step Into Magical World
                </div>

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
                        <div>
                            <Card className='box-content-learn' style={{ backgroundColor: '#C497F1' }}>
                                <Card.Img variant="top" src={variables} className='img-content-learn'/>
                                <Card.Body >
                                    <Card.Title>How to Make Music</Card.Title>
                                    <Card.Text>
                                        Learn how to make music with Mrs Ella
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className='box-content-learn' style={{ backgroundColor: '#C497F1' }}>
                                <Card.Img variant="top" src={ifelse} className='img-content-learn'/>
                                <Card.Body>
                                    <Card.Title>Creating your Own World</Card.Title>
                                    <Card.Text>
                                        Imagine and creating your own world with Mr Arya
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className='box-content-learn' style={{ backgroundColor: '#C497F1' }}>
                                <Card.Img variant="top" src={loops} className='img-content-learn' />
                                <Card.Body>
                                    <Card.Title>Let's Explore The World</Card.Title>
                                    <Card.Text>
                                        Let's go explore the world with programming
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card className='box-content-learn' style={{ backgroundColor: '#C497F1' }}>
                                <Card.Img variant="top" src={ifelse} className='img-content-learn' />
                                <Card.Body>
                                    <Card.Title>Play With Infinite Possibilities</Card.Title>
                                    <Card.Text>
                                        Let's play and find infinite possibilities to explore
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel>
                </Container>
            </div>
        </div>
        </>
    );
}

export default Learning;