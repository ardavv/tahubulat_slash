import styles from '../style/homeLogin.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
        <div className='loginBG'>

        <div className={styles.container} style={{ margin: 'auto 100px' }}>
            <div className={styles.header} style={{ backgroundColor: 'white', borderRadius: '20px', height: '70px', maxWidth: '500px', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bolder' }}>
                    Choose Your Skill Level
                </h1>
            </div>

            <Row xs={1} md={3} className="g-0" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                {cardsData.map((card, idx) => (
                    <Col key={idx}>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <Link to={card.link} style={{ textDecoration: 'none' }}>
                                <Card className={styles.customCard} style={{ borderRadius: '50px', height: '500px', width: '350px' }}>
                                    <Card.Img variant="top" src={card.imageSrc} className={styles.cardImage} style={{ width: '300px', margin: '30px auto' }}/>
                                    <Card.Body style={{ textAlign: 'center' }}>
                                        <Card.Title className={styles.customTitle} style={{ marginTop: idx === 0 ? '20px' : '60px' }}>
                                            <h1 style={{ fontWeight: 'bolder' }}>
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
        </div>
    </div>
    );
}

export default Skill;
