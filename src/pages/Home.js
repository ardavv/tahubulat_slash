import React from 'react'
import "../style/homeLogin.css"
import Button from 'react-bootstrap/Button'
import { Nav, Form, Card, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "../App.css"
import Navbar from '../components/NavigationBar.js'
import page from '../assets/img/page1.png'

function Home() {
    return(
        <>
            <Navbar />
            {/* <div className='homeBG'> */}
                <div className='home1'>
                    <h2 className='home1-title'>Lorep Ipsum Dolor <br></br>
                        <span style={{color: 'white', textShadow: 'none'}}>Amet Lore</span> 
                    </h2>
                    
                    <p className='home1-caption'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat semper est, ut dignissim lacus cursus et. Suspendisse euismod at nunc quis sagittis. Fusce vitae egestas lorem. Etiam ornare est vitae enim imperdiet, sed tincidunt velit bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam mauris metus, egestas et libero quis, facilisis vehicula eros. Vestibulum non laoreet risus, ut vulputate nisl.
                    </p> 
                </div>
                <div className='home2'>
                    <h2 className='home2-title'>Let's Begin <br></br>
                        <span style={{textShadow: '8px 4px 0 #a1d9ff', WebkitTextStrokeColor: '#43b3ff'}}>Your Adventour !</span>
                    </h2>
                    <Button className='btn-get-started'>
                        <Nav.Link as={Link} to='/signup'>Getting Started</Nav.Link>
                    </Button>
                </div>
            {/* </div> */}
        </>
    );
}

export default Home