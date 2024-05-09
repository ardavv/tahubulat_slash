import { React, useState, useEffect } from 'react';
import "../style/homeLogin.css";
import "../style/learningPage.css";

import "../style/taskPage.css"
import { Card, Container, Row, Col, Dropdown, Form, Button, Stack, Image} from 'react-bootstrap';

import { Link } from "react-router-dom";
import "../App.css";
import Navbar from '../components/NavigationBar.js';
import Carousel from "react-multi-carousel";
import Games from '../assets/img/Games.png'
import Puzzles from '../assets/img/Puzzles.png'
import A_logo from '../assets/img/A logo.png'
import Music from '../assets/img/Music.png'
import Chat from '../assets/img/Chat.png'
import "react-multi-carousel/lib/styles.css";

// 
import beginnerData from '../data/BeginnerData.js'
import intermediateData from '../data/IntermediateData.js'
import expertData from '../data/ExpertData.js'

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

    const [selectedLevel, setSelectedLevel] = useState('');

    useEffect(() => {
        setSelectedLevel('beginner');
    }, []);

    const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
    };

    let yourDataArray = [];
    if (selectedLevel === 'beginner') {
        yourDataArray = beginnerData;

    } else if (selectedLevel === 'intermediate') {
        yourDataArray = intermediateData;

    } else if (selectedLevel === 'expert') {
        yourDataArray = expertData;

    }

    const openVideo = (videoUrl) => {
        console.log('Opening video with ID:', videoUrl);
        const youtubeLink = `https://www.youtube.com/watch?v=${videoUrl}`;
        window.open(youtubeLink, '_blank');
    };

    return (

        <>
            <Navbar activeKey='/learning' />
            <div className='homeBG' style={{ backgroundColor: 'white' }}>
                <div className='container'>

                    <Row>
                        <Col style={{ maxWidth: '300px' }}>
                            <select value={selectedLevel} onChange={handleLevelChange} className='custom-dropdown'  >
                                <option value="beginner">Pemula</option>
                                <option value="intermediate">Menengah</option>
                                <option value="expert">Ahli</option>
                            </select>

                        </Col>
                        <Col>
                            <Stack gap={2}>

                                <div>
                                    <Form className="d-flex mt-3" >
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
                        swipeable={false}
                        draggable={false}
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
                        {yourDataArray.map((item, index) => (
                            <div key={index} onClick={() => openVideo(item.videoUrl)} style={{ cursor: 'pointer' }}>
                                <Card className='box-content-learn' style={{ backgroundColor: '#C497F1' }}>
                                    <Card.Img variant="top" src={item.imageUrl} className='img-content-learn'/>
                                    <Card.Body style={{ fontFamily: 'Genty', color: 'white', textAlign: 'center' }}>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Body>
                                </Card>


                            </div>
                        ))}

                    </Carousel>
                </Container>
            </div>
        </>
    );
}

export default Learning;