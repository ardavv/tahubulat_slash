import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form, Button, Stack, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navbar from '../components/NavigationBar.js';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dropdowning from '../components/DropdownChange.js';
import beginnerData from '../data/BeginnerData.js'; // Ubah sesuai dengan path yang benar
import intermediateData from '../data/IntermediateData.js'; // Ubah sesuai dengan path yang benar
import expertData from '../data/ExpertData.js'; // Ubah sesuai dengan path yang benar
import buku from '../assets/img/buku.png';
import task from '../assets/img/task.png';
import video from '../assets/img/video.png';
import search from '../assets/img/search.png'
import '../style/homeLogin.css';
import '../style/videoPage.css'
import '../App.css';

//Card Video
import CardData from '../components/CardVideo.js'
import CardDataBeginner from '../data/BeginnerVideo.js';
import CardDataIntermediate from '../data/IntermediateVideo.js';
import CardDataExpert from '../data/ExpertVideo.js';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};



function Learning(props) {
    let cardData = []
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
        cardData = CardDataBeginner
    } else if (selectedLevel === 'intermediate') {
        yourDataArray = intermediateData;
        cardData = CardDataIntermediate
    } else if (selectedLevel === 'expert') {
        yourDataArray = expertData;
        cardData = CardDataExpert
    }


    const scrollToTarget = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };



    return (
        <>
            <Navbar activeKey='/learning' />
            <div className='homeBG'>
                <Row className=''>
                    <Col className=''>
                        <label>Pilih level:</label>
                        <select value={selectedLevel} onChange={handleLevelChange} className='custom-dropdown'>
                            <option value="beginner">Pemula</option>
                            <option value="intermediate">Menengah</option>
                            <option value="expert">Ahli</option>
                        </select>
                    </Col>
                    <Col className=''>
                        <Stack gap={2}>
                            <div>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder='search'
                                        className="me-2"
                                        aria-label="Search"
                                        prepend={<Image src={search} />}
                                    />
                                    <Button style={{ backgroundColor: '#9065e7', color: '#ffffff' }}>
                                        Search
                                    </Button>
                                </Form>
                            </div>
                            <div>
                                <Container>
                                    <Row xs="auto">
                                        <Col >
                                            <div onClick={() => scrollToTarget('video')}>
                                                <Image src={buku} rounded className="site-logo" />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div onClick={() => scrollToTarget('video')}>
                                                <Image src={task} rounded className="site-logo" />
                                            </div>
                                        </Col>
                                        <Col>

                                            <div onClick={() => scrollToTarget('video')}>
                                                <Image src={video} rounded className="site-logo" />
                                            </div>
                                        </Col>
                                    </Row>



                                </Container>



                            </div>
                        </Stack>
                    </Col>
                    <Col>
                        <Card className='card-task text-white'>
                            <Card.Body>
                                <Card.Title>Active Task</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Watch Video How to Make Music</li>
                                        <li>Doing Task</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className='title'>
                    Step Into Magical World
                </div>
                <div>
                    <Container className='carousels'>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true}
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
                                <div key={index}>
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
            </div>

            <div className='vid-page' id='video'>
                <div className='title'>
                    Video Pembelajaran
                </div>
                <div>
                <CardData cardData={cardData} />
                </div>
            </div>
        </>
    );
}

export default Learning;
