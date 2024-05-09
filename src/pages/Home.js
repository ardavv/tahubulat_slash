import React from 'react'
import "../style/homeLogin.css"
import "../style/homePage.css"
import Button from 'react-bootstrap/Button'
import { Nav, Form, Card, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "../App.css"
import Navbar from '../components/NavigationBar.js'
import page from '../assets/img/page1.png'
import Home1Image from '../assets/img/home1.webp'
import Home2Image from '../assets/img/home2.webp'
import CodeIcon from '../assets/img/code-solid.svg'
import ToyIcon from '../assets/img/toy.png'

function Home() {
    return(
        <>
            <Navbar />
            <Container className='p-0 home-wrapper' fluid style={{margin: '0 !important', padding: '0 !important'}}>
                <Row>
                    <Col className='home1'>
                        <h2 className='home1-title'>To Program <br></br>
                            <span style={{color: 'white', textShadow: 'none'}}>
                                Is To Play
                            </span> 
                        </h2>

                        <Image src={Home1Image} className='home1-image'></Image>
                        
                        <p className='home1-caption'>
                            <span style={{WebkitTextStroke: '1px black'}}>Playgram</span> is a kids-friendly website where kids can learn programming in a fun way.
                            Programming enhances kids' ability to be creative and master at problem solving.
                        </p> 
                        <Image src={CodeIcon} style={{position: 'relative', left: '700px', width: '100px', mixBlendMode: 'multiply', opacity: 0.05, transform: 'rotate(-10deg)'}}></Image>
                        <Image src={ToyIcon} style={{position: 'relative', top: '70px', left: '100px', width: '100px', mixBlendMode: 'multiply', opacity: 0.05, transform: 'rotate(-10deg)'}}></Image>
                    </Col>
                </Row>
                <Row>
                    <Col className='home2 d-flex align-items-center justify-content-center'>
                        <center>
                            <Image src={Home2Image} className='home2-image'></Image>
                            <h2 className='home2-title'>
                                Our Mission
                            </h2>

                            <p className='home2-caption'>
                                We aim to provide free and high quality courses for kids to learn programming.
                                Kids typically want to play around often. 
                                We ensure that by practicing and solving problems here, kids would feel as if they're playing a fun game.
                                <br></br>
                                <br></br>
                                So kids could have high dreams, brighten themself and the world around them.
                            </p>
                        </center>
                    </Col>
                </Row>
                <Row>
                    <Col className='home3'>
                        <h2 className='home3-title'>Let's Begin <br></br>
                            <span style={{textShadow: '8px 4px 0 #a1d9ff', WebkitTextStrokeColor: '#43b3ff'}}>Your Adventour !</span>
                        </h2>
                        
                        <Button className='btn-get-started'>
                            <Nav.Link as={Link} to='/signup'>Getting Started</Nav.Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
                {/* <div className='home1'>
                    <h2 className='home1-title'>Lorep Ipsum Dolor <br></br>
                        <span style={{color: 'white', textShadow: 'none'}}>Amet Lore</span> 
                    </h2>
                    
                    <p className='home1-caption'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat semper est, ut dignissim lacus cursus et. Suspendisse euismod at nunc quis sagittis. Fusce vitae egestas lorem. Etiam ornare est vitae enim imperdiet, sed tincidunt velit bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam mauris metus, egestas et libero quis, facilisis vehicula eros. Vestibulum non laoreet risus, ut vulputate nisl.
                    </p> 
                </div>
                <div className='home3'>
                    <h2 className='home3-title'>Let's Begin <br></br>
                        <span style={{textShadow: '8px 4px 0 #a1d9ff', WebkitTextStrokeColor: '#43b3ff'}}>Your Adventour !</span>
                    </h2>
                    <Button className='btn-get-started'>
                        <Nav.Link as={Link} to='/signup'>Getting Started</Nav.Link>
                    </Button>
                </div> */}
            {/* </div> */}
        </>
    );
}

export default Home