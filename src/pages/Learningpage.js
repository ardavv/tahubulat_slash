import React from 'react'
import "../style/homeLogin.css"
import { Form, Card, Container, Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "../App.css"
import Navbar from '../components/NavigationBar.js'
import loops from '../assets/img/loops.jpg'
import variables from '../assets/img/variables.jpg'

function Learning() {
    return (
        <div className='homeBG'>
            <Navbar/>
            <h1>Video Pembelajaran</h1>
            <Container>
                <Row>
                    <Col className='border'>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={variables} />
                            <Card.Body>
                                <Card.Title>Variables</Card.Title>
                                <Card.Text>
                                    Berkenalan dengan variabel, sebuah kantong ajaib yang dapat menyimpan berbagai hal
                                </Card.Text>
                                <Button variant="primary">Tonton Video</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='border'>
                        TES
                    </Col>
                    <Col className='border'>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={loops} />
                            <Card.Body>
                                <Card.Title>loops</Card.Title>
                                <Card.Text>
                                    Pelajari bagaimana cara mengulangi kejadian sesuai dengan yang anda inginkan!
                                </Card.Text>
                                <Button variant="primary">Tonton Video</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default Learning

