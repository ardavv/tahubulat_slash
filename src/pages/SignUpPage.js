import React from 'react'
import styles from "../style/homeLogin.css"
import { Link } from "react-router-dom"
import { Button, Image } from 'react-bootstrap'
import Facebook from '../assets/img/facebook.svg'
import Google from '../assets/img/google.svg'
import Apple from '../assets/img/apple.svg'

function SignUp() {
    return (
        <>
            <div className='loginBG'></div>
            <div className='login-signup-container'>
                <div className='except-submit-btn'>
                    <h1 className='signup-title'>
                        Sign Up <br></br>
                        for Free
                    </h1>

                    <form className="m-4">
                        <div className={styles["form-group"]}>
                            <label htmlFor="inputEmail" className={styles.nameForm + ' cust-label'} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Your Email : </label>
                            <input type="email" className={`${styles.registForm} form-control cust-input`} id="inputEmail" aria-describedby="emailHelp" placeholder="Email" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }}/>
                        </div>

                        <br />
                        <br />

                        <div className={styles["form-group"]}>
                            <label htmlFor="inputPassword" className={styles.nameForm + ' cust-label'} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Password :</label>
                            <input type="password" className={`${styles.registForm} form-control cust-input`} id="inputPassword" placeholder="Password" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }}/>
                        </div>

                        <br />
                        <br />

                        <div className={styles["form-group"]}>
                            <label htmlFor="confirmPassword" className={styles.nameForm + ' cust-label'} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Confirm Password :</label>
                            <input type="password" className={`${styles.registForm} form-control cust-input`} id="confirmPassword" placeholder="Password" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }}/>
                        </div>

                        <div className= "logo text-center mt-3 p-2">
                            <Link to="">
                                <Image src={Facebook} alt="Facebook" className='site-logo' />
                            </Link>

                            <Link to="">
                                <Image src={Google} alt="Google" className='site-logo' />
                            </Link>

                            <Link to="">
                                <Image src={Apple} alt="Apple" className='site-logo' />
                            </Link>
                        </div>

                        <div className='text-center'>
                            <span>Already have an account? </span>
                            <Link to="/" style={{ textDecoration: 'none' }}>Sign in</Link>
                        </div>

                    </form>
                </div>
                <Button className='submit-btn yellow-btn d-flex align-items-center justify-content-center' as={Link} to='/login'>
                    Next
                </Button>
            </div>
        </>
    )
}
export default SignUp
