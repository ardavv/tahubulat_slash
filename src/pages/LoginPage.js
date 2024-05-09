import React from 'react'
import styles from '../style/homeLogin.css';
import { Image, Button, Form, FormCheck, FormLabel } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Facebook from '../assets/img/facebook.svg'
import Google from '../assets/img/google.svg'
import Apple from '../assets/img/apple.svg'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';

function Login() {
    return (
      <>
        <div className='loginBG'></div>

        <div className='login-signup-container'>
          <div className='except-submit-btn'>

            <h1 className='signup-title'>
                Login to<br></br>
                Continue
            </h1>


            <form className="m-4">
              <div className={styles["form-group"]}>
                  <label htmlFor="inputEmail" className={styles.nameForm + ' cust-label'} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Your Email : </label>
                  <input type="email" className={`${styles.registForm} form-control cust-input`} id="inputEmail" aria-describedby="emailHelp" placeholder="Email" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }}/>
              </div>

              <br />

              <div className={styles["form-group"]}>
                  <label htmlFor="inputPassword" className={styles.nameForm + ' cust-label'} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Password :</label>
                  <input type="password" className={`${styles.registForm} form-control cust-input`} id="inputPassword" placeholder="Password" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }}/>
              </div>

              <br />
              <FormCheck>
                <FormCheckInput type='checkbox' style={{height: '20px', width: '20px', border: '2px solid black'}}></FormCheckInput>
                <FormCheckLabel>Remember me</FormCheckLabel>
              </FormCheck>

              <div className={styles["form-group"]}>
                <center>
                  <Button as={Link} to='/identity' className='login-btn yellow-btn'>Login</Button>
                </center>
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
                  <Link to="/" style={{ textDecoration: 'none' }}>Forgot my password</Link>
              </div>

              <div className='text-center'>
                  <span>I don't have an account. </span>
                  <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link>
              </div>

          </form>
          </div>
        </div>
      </>
    )
}
export default Login
