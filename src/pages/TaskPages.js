import { React, useState, useEffect } from 'react';
import "../style/homeLogin.css";
import "../style/taskPage.css"
import { Container, Row, Col, Dropdown, Stack, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from '../components/NavigationBar.js';
import dress from '../assets/img/Thumbnail_dress.png';
import school from '../assets/img/Thumbnail_school.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logic from '../assets/img/icons/taskBuildLogic.webp'
import music from '../assets/img/icons/taskMakeMusic.webp'
import story from '../assets/img/icons/taskMakeStory.png'
import world from '../assets/img/icons/taskMakeWorld.webp'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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

function Task(props) {
    const cardsData = [
        {
            title: "Build Logic",
            imageSrc: logic,
            link: "#"
        },
        {
            title: "Make Music",
            imageSrc: music,
            link: "#"
        },
        {
            title: "Make Story",
            imageSrc: story,
            link: "#"
        },
        {
            title: "Make World",
            imageSrc: world,
            link: "#"
        }
    ];

    const [selectedLevel, setSelectedLevel] = useState('');

    useEffect(() => {
        setSelectedLevel('beginner');
    }, []);

    const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
    };


    return (
        <>
            <Navbar activeKey='/task' />
            <div className='homeBG' style={{ backgroundColor: 'white' }}>
                <div className='container'>
                    <Row >
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
                                    <Row xs={1} md={4} className='g-4'>
                                        {cardsData.map((card, idx) => (
                                            <Col key={idx} style={{ width: '100px', height: '100px', margin: '50px 50px auto 20px' }}>
                                                <Link to={card.link} style={{ textDecoration: 'none' }}>
                                                    <Card className='card-task g-4' style={{ width: '100px', height: '100px', backgroundColor: '#FFDD53' }}>
                                                        <Card.Img variant="top" src={card.imageSrc} style={{ height: '70px', width: '70px', marginTop: '-8px' }} />
                                                        <Card.Body>
                                                            <Card.Title style={{ marginTop: '10px', width: '100%', whiteSpace: 'nowrap', fontFamily: 'Genty' }}>
                                                                <p>
                                                                    {card.title}
                                                                </p>
                                                            </Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Stack>
                        </Col>

                        <Col style={{ maxWidth: '300px' }}>
                            <Card style={{ width: '300px', backgroundColor: '#864AF9' }}>
                                <Card.Body style={{ fontFamily: 'Genty' }}>
                                    <Card.Title style={{ color: 'white', fontWeight: 'bolder', fontSize: '30px', textAlign: 'center', marginTop: '-15px' }}>Your Progress</Card.Title>
                                    <div style={{ width: '100px', margin: '20px auto 0px' }}>
                                        <CircularProgressbar
                                            value={30}
                                            text={`${30}%`}
                                            strokeWidth={15}
                                            styles={{
                                                path: {
                                                    stroke: '#FBB454', // Warna latar belakang progress bar
                                                },
                                                text: {
                                                    fill: '#FFFFFF', // Warna teks
                                                },
                                            }} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className='title container mt-4' style={{ textAlign: 'left' }}>
                    <h1 className='task-title'>
                        Beginner's Pick
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
                            <Card className='box-content-learn'>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <Card.Img variant="top" src={dress} className='img-content-learn' />
                                    <Card.Body>
                                        <Card.Title className='card-text-title'>Help Anita arrange her clothes</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                        <div>
                            <Card className='box-content-learn'>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <Card.Img variant="top" src={school} className='img-content-learn' />
                                    <Card.Body>
                                        <Card.Title className='card-text-title'>Oh no, Shawn has an exam tomorrow, let's help him Study</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                        <div>
                            <Card className='box-content-learn'>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <Card.Img variant="top" src={dress} className='img-content-learn' />
                                    <Card.Body>
                                        <Card.Title className='card-text-title'>Pick the best answer </Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </div>
                        <div>
                            <Card className='box-content-learn'>
                                <Link to="#" style={{ textDecoration: 'none' }}>
                                    <Card.Img variant="top" src={school} className='img-content-learn' />
                                    <Card.Body>
                                        <Card.Title className='card-text-title'>Let's help Andi find his answer</Card.Title>
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

export default Task;