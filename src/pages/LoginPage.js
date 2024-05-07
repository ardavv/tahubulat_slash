import React from 'react'
import "../style/homeLogin.css"
import Button from 'react-bootstrap/Button'
import { Form, Card, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Facebook from '../assets/img/facebook.svg'
import Google from '../assets/img/google.svg'
import Apple from '../assets/img/apple.svg'
import Upn from '../assets/img/upn.png'

function Login() {
    return (
        <div className='myBG'>
            <div className='center-card'>

                <Container className=' text-white d-flex justify-content-center bg'>
                    <Row>
                        <Col>
                            <Card bg='light'>
                                <Image src={Upn} className='site-logo' />
                                <div className='title'>Login</div>
                                {/* <div className='title'>Continue</div> */}
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='bold-text'>Your Email:</Form.Label>
                                        <Form.Control type="email" placeholder="Email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className='bold-text'>Your Password:</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>




                                    <div className='logbutton'>
                                        <Button variant="warning" type="submit" className='w-50'>
                                            Login
                                        </Button>
                                    </div>

                                    <div className='logo-container'>
                                        <Image src={Facebook} className='image' />
                                        <Image src={Google} className='image' />
                                        <Image src={Apple} className='image' />
                                    </div>
                                </Form>
                                <div className='link-container'>
                                    <Card.Link href="#" className='card-link'>Forgot Password?</Card.Link>
                                    <Link to='/signup'>
                                    <Card.Link href="#" className='card-link'>I don't have an account</Card.Link>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
export default Login