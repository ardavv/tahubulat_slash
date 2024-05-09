import React from 'react'
import styles from "../style/homeLogin.css"
import { Link } from "react-router-dom"
import { Image } from 'react-bootstrap'
import Facebook from '../assets/img/facebook.svg'
import Google from '../assets/img/google.svg'
import Apple from '../assets/img/apple.svg'

function SignUp() {
    return (
        <div className='loginBG'>
            <div className={styles.container} style={{ maxWidth: '396px', margin: 'auto' }}>
                <div className={styles["sign-up"]} style={{ backgroundColor: 'white', borderRadius: '20px' }}>
                    <div className={`${styles.header} text-center mt-4 pt-3`}>
                        <h1 style={{ fontWeight: '1000' }}>Sign Up</h1>
                        <h1 style={{ fontWeight: '1000' }}>For Free</h1>
                    </div>

                    <form className="m-4">
                        <div className={styles["form-group"]}>
                            <label htmlFor="inputEmail" className={styles.nameForm} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Your Email : </label>
                            <input type="email" className={`${styles.registForm} form-control`} id="inputEmail" aria-describedby="emailHelp" placeholder="Email" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }} />
                        </div>

                        <br />

                        <div className={styles["form-group"]}>
                            <label htmlFor="inputPassword" className={styles.nameForm} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Password :</label>
                            <input type="password" className={`${styles.registForm} form-control`} id="inputPassword" placeholder="Password" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }} />
                        </div>

                        <br />

                        <div className={styles["form-group"]}>
                            <label htmlFor="confirmPassword" className={styles.nameForm} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Confirm Password :</label>
                            <input type="password" className={`${styles.registForm} form-control`} id="confirmPassword" placeholder="Password" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }} />
                        </div>

                        <div className="logo text-center p-2">
                            <Link to="">
                                <Image src={Facebook} alt="Facebook" className={styles.image} style={{ height: '30px', margin: '10px' }} />
                            </Link>

                            <Link to="">
                                <Image src={Google} alt="Google" className={styles.image} style={{ height: '30px', margin: '10px' }} />
                            </Link>

                            <Link to="">
                                <Image src={Apple} alt="Apple" className={styles.image} style={{ height: '30px', margin: '10px' }} />
                            </Link>
                        </div>

                        <div className={styles["have-account"]}>
                            <p style={{ textAlign: 'center' }}>Already have an account? <Link to="/" style={{ textDecoration: 'none' }}>Sign in</Link></p>
                        </div>

                        <div className={styles.submit} style={{ width: '396px', borderRadius: '10px', backgroundColor: '#FFC55A', marginLeft: '-24px' }}>
                            <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                                <button type="submit" className="btn" style={{ width: '400px' }}>
                                    <div className={styles["btn-name"]}>
                                        <h3 style={{ textAlign: 'center', fontWeight: 'bolder' }}>
                                            Next
                                        </h3>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp
