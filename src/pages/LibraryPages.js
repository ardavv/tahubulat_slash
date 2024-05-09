import { React, useState, useEffect } from 'react';
import "../style/homeLogin.css";
import "../style/taskPage.css"
import "../style/libraryPage.css"
import { Container, Row, Col, Dropdown, Stack, Image, Card, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from '../components/NavigationBar.js';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LibraryData from '../data/LibraryData.js';
import Games from '../assets/img/Games.png'
import Puzzles from '../assets/img/Puzzles.png'
import A_logo from '../assets/img/A logo.png'
import Music from '../assets/img/Music.png'
import Chat from '../assets/img/Chat.png'
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

function Library(props) {
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
                                        <Image src={Puzzles} rounded className="site-logo m-1" style={{ width: '80px' }} />
                                    </Link>
                                    <Link to="#" style={{ marginLeft: '15px' }}>
                                        <Image src={Games} rounded className="site-logo m-1" style={{ width: '80px' }} />
                                    </Link>

                                    <Link to="#" style={{ marginLeft: '15px' }}>
                                        <Image src={Music} rounded className="site-logo m-1" style={{ width: '80px' }} />
                                    </Link>

                                    <Link to="#" style={{ marginLeft: '15px' }}>
                                        <Image src={A_logo} rounded className="site-logo m-1" style={{ width: '80px' }} />
                                    </Link>

                                    <Link to="#" style={{ marginLeft: '15px' }}>
                                        <Image src={Chat} rounded className="site-logo m-1" style={{ width: '80px' }} />
                                    </Link>
                                </div>
                            </Stack>
                        </Col>

                        <Col style={{ maxWidth: '300px' }}>
                            <Card style={{ width: '300px', backgroundColor: '#864AF9' }}>
                                <Card.Body style={{ fontFamily: 'Genty' }}>
                                    <Card.Title style={{ color: 'white', fontWeight: 'bolder', fontSize: '30px', textAlign: 'center', marginTop: '-15px' }}>Your Progress</Card.Title>
                                    <div style={{ width: '100px', margin: '20px auto 0px' }}>
                                        <CircularProgressbar
                                            value={70}
                                            text={`${70}%`}
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

                <div className='container mt-4 library-title' style={{ textAlign: 'left' }}>
                    <h1>
                        Dance of Discovery
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

                        {LibraryData.map((item, index) => (
                            <div key={index} style={{ cursor: 'pointer', width: '200px', height: 'auto' }} className='border'>
                                <Stack gap={2} className='border'>
                                    <div style={{ width: '100%' }}> {/* Atur lebar div agar memenuhi lebar container */}
                                        <Image src={item.imageUrl} alt="Card image" className='libraryImage' style={{ width: '100%' }} /> {/* Atur lebar gambar menjadi 100% */}
                                    </div>
                                    <div style={{ width: '100%' }} > {/* Atur lebar div agar memenuhi lebar container */}
                                        <Card className=" card-library" style={{ width: '100%' }}> {/* Atur lebar kartu menjadi 100% */}
                                            <Card.Title style={{ fontSize: '15px' }}>{item.title}</Card.Title>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                            <Card.Text></Card.Text>
                                        </Card>
                                    </div>
                                </Stack>
                            </div>
                        ))}

                    </Carousel>
                </Container>
            </div>
        </>
    );
}

export default Library;