import React, { useState } from 'react';
import styles from '../style/homeLogin.css';
import { Image } from 'react-bootstrap';
import EditPhoto from '../assets/img/edit_photo.svg';
import Avatar from '../assets/img/profile.png';
import { Link } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Identity() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className='loginBG'>

        <div className={styles.container} style={{ maxWidth: '420px', margin: '100px auto' }}>
            <div className={styles.profile} style={{ backgroundColor: 'white', borderRadius: '25px', width: '500px', border: '1px solid black', padding: '40px 40px 40px 20px' }}>
                <div className="container">
                    <div className="row row-cols-2">
                        <div className="col text-center">
                            <Image src={Avatar} className={styles.avatar} style={{ verticalAlign: 'middle', width: '180px', height: 'auto', borderRadius: '50%' }}/>
                            <h3 className="fw-bold mt-3" >Edit Photo <Image src={EditPhoto} alt="Edit" style={{ width: '30px', height: '30px' }} /></h3>
                        </div>
                        <div className={styles.col}>
                            <ul>
                                <li style={{ listStyle: 'none' }}>
                                    <div className="form-group">
                                        <label htmlFor="inputName">Your Name :</label>
                                        <input type="text" className={`form-control ${styles.inputName}`} id="inputName" placeholder="Name" style={{ marginBottom: "12px" }}/>
                                    </div>
                                </li>
                                <li style={{ listStyle: 'none' }}>
                                    <form>
                                        <div className="form-row align-items-center">
                                            <div className="col-auto my-1">
                                                <label className="mr-sm-2" htmlFor="selectGrade">Your Grade Level :</label>
                                                <select className={`form-control ${styles.selectGrade}`} id="selectGrade" style={{ marginBottom: "12px" }}>
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
                                <li className={styles.date} style={{ listStyle: 'none' }}>
                                <label htmlFor="birth">Date of Birth :</label>
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
                        </div>
                    </div>

                    <div className={styles.next} style={{ textAlign: 'center', position: 'absolute', width: '135px', height: '50px', borderRadius: '30px', backgroundColor: '#FFC55A', marginLeft: '320px', marginTop: '50px' }}>
                        <button type="submit" className="btn" style={{ width: '135px' }}>
                            <div className="btn-name">
                                <Link to="/skill" style={{ textDecoration: 'none', color: 'black' }}> 
                                    <h3 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Next</h3>
                                </Link>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Identity;
