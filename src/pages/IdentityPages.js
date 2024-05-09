import React, { useState } from 'react';
import styles from '../style/homeLogin.css';
import { Button, Image, Container, Row, Col, Form, FormGroup, FormCheck, FormLabel} from 'react-bootstrap';
import EditPhoto from '../assets/img/edit_photo.svg';
import Avatar from '../assets/img/profile.png';
import { Link } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';


function Identity() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <div className='loginBG'></div>

            <Container className='identity-container' fluid style={{backgroundColor: 'white', width: '35vw'}}>
                <Row>
                    <Col className='text-center'>
                        <Image src={Avatar} className={styles.avatar} style={{ verticalAlign: 'middle', width: '180px', height: 'auto', borderRadius: '50%' }}/>
                        <h3 className="fw-bold mt-3" >
                            <span>Edit Photo </span>
                            <Image src={EditPhoto} alt="Edit" style={{ width: '30px', height: '30px' }} />
                        </h3>
                    </Col>

                    <Col>
                        <ul style={{padding: 0}}>
                            <li style={{listStyle: 'none'}}>
                                <FormGroup>
                                    <FormLabel className='identity-label'>Your Name :</FormLabel>
                                    <Form.Control className='identity-input' size="md" type="text" placeholder='Name' />
                                </FormGroup>
                            </li>

                            <li style={{listStyle: 'none'}}>
                                <form>
                                    <div className="form-row align-items-center">
                                        <div className="col-auto my-1">
                                            <FormLabel className='identity-label'>Your Grade Level :</FormLabel>
                                            <select className={`form-control ${styles.selectGrade} identity-input`} id="selectGrade" style={{ marginBottom: "12px" }}>
                                                <option selected>Choose...</option>
                                                <option value="1">1th - Grade</option>
                                                <option value="2">2th - Grade</option>
                                                <option value="3">3th - Grade</option>
                                                <option value="4">4th - Grade</option>
                                                <option value="5">5th - Grade</option>
                                                <option value="6">6th - Grade</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </li>

                            <li style={{listStyle: 'none'}}>
                                <FormLabel className='identity-label'>Date of Birth :</FormLabel>
                                <br/>
                                <ReactDatePicker
                                    id="birth"
                                    className={`form-control ${styles.datePicker}`}
                                    selected={selectedDate} // Gunakan nilai state selectedDate
                                    onChange={handleDateChange} // Gunakan fungsi handleDateChange
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Select a date"
                                />
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col>
                                <Button as={Link} to='/skill' className="identity-btn yellow-btn" style={{ width: '135px' }}>
                                    Next
                                </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Identity;
