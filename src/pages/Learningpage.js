import { React, useState, useEffect } from 'react';
import "../style/homeLogin.css";
import "../style/learningPage.css";
import { Card, Container, Row, Col, ButtonGroup, Dropdown, Form, Button, Stack, Image, Badge } from 'react-bootstrap';
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


// 
import idea from '../assets/img/icons/learningpage/idea.png'
import game from '../assets/img/icons/learningpage/game.png'
import music from '../assets/img/icons/learningpage/music.png'
import alphabet from '../assets/img/icons/learningpage/alphabet.png'
import chat from '../assets/img/icons/learningpage/chat.png'

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
                    <Row className='border'>
                        <Col style={{ maxWidth: '300px' }} className='border'>
                            <label>Pilih level:</label>
                            <select value={selectedLevel} onChange={handleLevelChange} className='custom-dropdown' >
                                <option value="beginner">Pemula</option>
                                <option value="intermediate">Menengah</option>
                                <option value="expert">Ahli</option>
                            </select>
                        </Col>
                        <Col xs='1' md='5' className='border'>
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
                                <Container>
        <Row>
            <Col className="gx-1">
                <Link to="/baca">
                    <Badge bg="danger" className="p-2 rounded-circle">
                        <Image src={idea} rounded className="site-logo m-1" style={{ width: '40px' }} />
                    </Badge>
                </Link>
            </Col>
            <Col className="gx-1">
                <Link to="/task">
                    <Badge style={{ backgroundColor: '#FFA500' }} className="p-2 rounded-circle">
                        <Image src={game} rounded className="site-logo m-1" style={{ width: '40px' }} />
                    </Badge>
                </Link>
            </Col>
            <Col className="gx-1">
                <Link to="/playlist">
                    <Badge bg="primary" className="p-2 rounded-circle">
                        <Image src={music} rounded className="site-logo m-1" style={{ width: '40px' }} />
                    </Badge>
                </Link>
            </Col>
            <Col className="gx-1">
                <Link to="/playlist">
                    <Badge bg="warning" className="p-2 rounded-circle">
                        <Image src={alphabet} rounded className="site-logo m-1" style={{ width: '40px' }} />
                    </Badge>
                </Link>
            </Col>
            <Col className="gx-1">
                <Link to="/playlist">
                    <Badge bg="warning" className="p-2 rounded-circle">
                        <Image src={chat} rounded className="site-logo m-1" style={{ width: '40px' }} />
                    </Badge>
                </Link>
            </Col>
        </Row>
    </Container>




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
                                <Card>
                                    <Card.Img variant="top" src={item.imageUrl} />
                                    <Card.Body>
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