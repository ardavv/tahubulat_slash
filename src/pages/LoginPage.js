import React from 'react'
import "../style/homeLogin.css"
import Button from 'react-bootstrap/Button'
import { Form, Card, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Facebook from '../assets/img/facebook.svg'
import Google from '../assets/img/google.svg'
import Apple from '../assets/img/apple.svg'

function Login() {
    return (
        <div className='loginBG'>
            <div className='border center-card'>

                <Container className=' text-white d-flex justify-content-center bg border'>
                    <Row>
                        <Col>
                            <Card bg='light'>
                                <div className='title'>Login To</div>
                                <div className='title'>Continue</div>
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
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>




                                    <div className='logbutton'>
                                        <Button variant="warning" type="submit" className='w-50' href='/home'>
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
                                    <Card.Link href="#" className='card-link'>Create an Account!</Card.Link>
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