// LevelSelectionPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import beginner from '../assets/img/beginner.png'
import intermediate from '../assets/img/intermediate.png'
import expert from '../assets/img/expert.png'


const LevelSelection = () => {
  const [selectedLevel, setSelectedLevel] = useState('');

  const navigate = useNavigate();

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleNextClick = () => {
    if (selectedLevel) {
      navigate(`/Learningpage/Beginner${selectedLevel}`);
    }
  };

  return (
    <div className='loginBG'>
      <h1>Select Your Level</h1>
      <Row className='justify-content-center' >
        <Col>
          <Button onClick={() => handleLevelSelect('beginner')}>
            <Card style={{ width: '25rem'}}>
              <Card.Body>
                <Card.Title>Beginner</Card.Title>
                <Card.Img variant="bottom" src={beginner} />
              </Card.Body>
            </Card>
          </Button>
        </Col>
        <Col>
          <Button onClick={() => handleLevelSelect('intermediate')}>
            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title>Intermediate</Card.Title>
                <Card.Img variant="top" src={beginner} />
              </Card.Body>
            </Card>
          </Button>
        </Col>
        <Col>
          <Button onClick={() => handleLevelSelect('expert')}>
            <Card style={{ width: '25rem', height:"25.5rem" }}>
              <Card.Body>
                <Card.Title>Expert</Card.Title>
                <Card.Img variant="top" src={expert} />
                
              </Card.Body>
            </Card>
          </Button>
        </Col>
      </Row>

      <Button onClick={handleNextClick}>Next</Button>
    </div>
  );
};

export default LevelSelection;
