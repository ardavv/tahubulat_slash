import React from 'react'
import "../style/homeLogin.css"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { Form, Card, Container, Row, Col, Image } from 'react-bootstrap'

function SignUp() {
    return (
        <div className='myBG'>
            <div className='border center-card'>

                <Container className=' text-white d-flex justify-content-center bg border'>
                    <Row>
                        <Col>
                            <Card bg='light' className='card'>
                                <div className='card-content'>

                                    <div className='title'>Sign Up</div>
                                    <div className='title'>For Free</div>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='bold-text'>Your Email:</Form.Label>
                                            <Form.Control type="email" placeholder="Email"/>
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




                                        <div className='nextbutton border'>
                                            <Link to='/identity'>
                                            <Button variant="warning" type="submit" className='w-50'>
                                                Next
                                            </Button>
                                            </Link>
                                        </div>

                                    </Form>
                                </div>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
export default SignUp