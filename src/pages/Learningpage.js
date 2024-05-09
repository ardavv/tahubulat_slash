import React from 'react';
import "../style/homeLogin.css";
import "../style/learningPage.css";
import { Card, Container, Row, Col, Dropdown, Form, Button, Stack, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from '../components/NavigationBar.js';
import loops from '../assets/img/loops.jpg';
import variables from '../assets/img/variables.jpg';
import ifelse from '../assets/img/ifelse.jpg';
import Carousel from "react-multi-carousel";
import Games from '../assets/img/Games.png'
import Puzzles from '../assets/img/Puzzles.png'
import A_logo from '../assets/img/A logo.png'
import Music from '../assets/img/Music.png'
import Chat from '../assets/img/Chat.png'
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
            <div className='homeBG' style={{ backgroundColor: 'white' }}>
                <div className='container'>
                    <Row >
                        <Col style={{ maxWidth: '300px' }}>
                            <Dropdown data-bs-theme="dark" >
                                <Dropdown.Toggle variant="secondary" className='dropdown-toggle'>
                                    Category
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ width: '200px', marginTop: '5px' }}>
                                    <Dropdown.Item href="#/action-1" active style={{ fontFamily: 'Genty' }}>
                                        Beginner
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" style={{ fontFamily: 'Genty' }}>Intermediate</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3" style={{ fontFamily: 'Genty' }}>Expert</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-4" style={{ fontFamily: 'Genty' }}>Change your level</Dropdown.Item>
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
                                            style={{ border: '2px solid black', borderRadius: '20px', width: '520px', fontFamily: 'Genty' }}
                                        />
                                        <Button style={{ border: '2px solid black', borderRadius: '20px', backgroundColor: '#864AF9', fontFamily: 'Genty' }}>
                                            Search
                                        </Button>
                                    </Form>
                                </div>
                                <div>
                                    <Link to="#" style={{ marginLeft: '15px' }}>
                                        <Image src={Puzzles} rounded className="site-logo m-1" style={{ width: '80px' }}/>
                                    </Link>
                                    <Link to="#" style={{ marginLeft: '15px' }}>
                                        <Image src={Games} rounded className="site-logo m-1" style={{ width: '80px' }}/>
                                    </Link>

                                    <Link to="#" style={{ marginLeft: '15px' }}>
                                        <Image src={Music} rounded className="site-logo m-1" style={{ width: '80px' }}/>
                                    </Link>
                                    
                                    <Link to="#" style={{ marginLeft: '15px' }}>
                                        <Image src={A_logo} rounded className="site-logo m-1" style={{ width: '80px' }}/>
                                    </Link>

                                    <Link to="#" style={{ marginLeft: '15px' }}>
                                        <Image src={Chat} rounded className="site-logo m-1" style={{ width: '80px' }}/>
                                    </Link>
                                </div>
                            </Stack>
                        </Col>
                        <Col>
                            <Card style={{ width: '300px', backgroundColor: '#864AF9', marginLeft: '50px' }}>
                                <Card.Body>
                                    <Card.Title style={{ color: 'white', fontWeight: 'bolder', fontSize: '30px', textAlign: 'center', fontFamily: 'Genty' }}>Active Task !</Card.Title>
                                    <Card.Text style={{ color: 'white', marginLeft: '-20px', fontSize: '18px', fontFamily: 'Genty' }}>
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
                    <h1 className='task-title'>
                        Step Into Magical World
                    </h1>
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
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <Card.Img variant="top" src={variables} className='img-content-learn'/>
                                    <Card.Body >
                                        <Card.Title className='card-text-title'>How to Make Music</Card.Title>
                                        <Card.Text className='card-text-desc'>
                                            Learn how to make music with Mrs Ella
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                        <div>
                            <Card className='box-content-learn' style={{ backgroundColor: '#C497F1' }}>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <Card.Img variant="top" src={ifelse} className='img-content-learn'/>
                                    <Card.Body>
                                        <Card.Title className='card-text-title'>Creating your Own World</Card.Title>
                                        <Card.Text className='card-text-desc'>
                                            Imagine and creating your own world with Mr Arya
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                        <div>
                            <Card className='box-content-learn' style={{ backgroundColor: '#C497F1' }}>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <Card.Img variant="top" src={loops} className='img-content-learn' />
                                    <Card.Body>
                                        <Card.Title className='card-text-title'>Let's Explore The World</Card.Title>
                                        <Card.Text className='card-text-desc'>
                                            Let's go explore the world with programming
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                        <div>
                            <Card className='box-content-learn'>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <Card.Img variant="top" src={ifelse} className='img-content-learn' />
                                    <Card.Body >
                                        <Card.Title className='card-text-title'>Play With Infinite Possibilities</Card.Title>
                                        <Card.Text className='card-text-desc'>
                                            Let's play and find infinite possibilities to explore
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                    </Carousel>
                </Container>
            </div>
        </>
    );
}

export default Learning;