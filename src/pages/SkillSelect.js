import styles from '../style/homeLogin.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Beginner from '../assets/img/beginner.png';
import Intermediate from '../assets/img/intermediate.png';
import Expert from '../assets/img/expert.png';
import { Link } from 'react-router-dom';

function Skill() {
    const cardsData = [
        {
            title: "Beginner",
            imageSrc: Beginner,
            link: "/learning"
        },
        {
            title: "Intermediate",
            imageSrc: Intermediate,
            link: "/learning"
        },
        {
            title: "Expert",
            imageSrc: Expert,
            link: "/learning"
        }
    ];

    return (
        <>
            <div className='loginBG'></div>

            <Container className='skill-container'>
                <div className='d-flex align-items-center justify-content-center' style={{backgroundColor: 'white', borderRadius: '30px', height: '100px', maxWidth: '700px', margin: 'auto', padding: '10px 50px'}}>
                    <span style={{fontSize: '45px', fontWeight: 'bolder'}}>Choose Your Next Level</span>
                </div>

                <Row xs={1} md={3} className="g-0" style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
                    {cardsData.map((card, idx) => (
                        <Col key={idx}>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                <Link to={card.link} style={{ textDecoration: 'none' }}>
                                    <Card className={styles.customCard + ' skill-card'} style={{ borderRadius: '50px', height: '500px', width: '350px' }}>
                                        <Card.Img variant="top" src={card.imageSrc} className={styles.cardImage} style={{ width: '300px', margin: '30px auto' }}/>
                                        <Card.Body style={{ textAlign: 'center' }}>
                                            <Card.Title className={styles.customTitle} style={{ marginTop: idx === 0 ? '20px' : '60px' }}>
                                                <h1 style={{ fontWeight: '' }}>
                                                    {card.title}
                                                </h1>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Skill;
