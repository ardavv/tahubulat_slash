import React from 'react'
import "../style/homeLogin.css"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { Form, Card, Container, Row, Col, Image } from 'react-bootstrap'

function Identity() {
    return (
        <div className='loginBG'>
            <div className='center-card'>
            <Container>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Link to='/home'>
                        <Card.Link href="#">Card Link</Card.Link>
                        </Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                    </Col>
                </Row>
            </Container>
                

            </div>

        </div>
    )
}

export default Identity