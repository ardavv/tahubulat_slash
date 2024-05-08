import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CardVideo = ({ cardData }) => {
    const openVideo = (videoUrl) => {
        console.log('Opening video with ID:', videoUrl);
        const youtubeLink = `https://www.youtube.com/watch?v=${videoUrl}`;
        window.open(youtubeLink, '_blank');
    };

    return (
        <Row>
            {cardData.map((card, index) => (
                <Col key={index} sm={4}>
                    <div onClick={() => openVideo(card.videoUrl)}>
                        <Card>
                            <Card.Img variant="top" src={card.imageUrl} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default CardVideo;
