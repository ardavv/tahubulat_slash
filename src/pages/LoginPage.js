import React from 'react'
import styles from '../style/homeLogin.css';
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Facebook from '../assets/img/facebook.svg'
import Google from '../assets/img/google.svg'
import Apple from '../assets/img/apple.svg'

function Login() {
    return (
      <div className='loginBG'>

          <div className={styles.container} style={{ maxWidth: '396px', margin: 'auto' }}>
          <div className={styles.signIn} style={{ backgroundColor: 'white', borderRadius: '20px', height: '525px' }}>

          <div className={`${styles.header} text-center mt-4 pt-3`}>
            <h1 style={{ fontWeight: '1000' }}>Login to</h1>
            <h1 style={{ fontWeight: '1000' }}>Continue</h1>
          </div>


            <form className="m-4">
              <div className="form-group">
                <label htmlFor={styles.inputEmail} className={styles.nameForm} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Your Email : </label>
                <input type="email" className="loginForm form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }} />
              </div>

              <br />

              <div className="form-group">
                <label htmlFor="inputPassword" className={styles.nameForm} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Password :</label>
                <input type="password" className="loginForm form-control" id="inputPassword" placeholder="Password" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }} />
              </div>

              <div className={`${styles.submit} mt-4`} style={{ textAlign: 'center', width: '180px', borderRadius: '30px', backgroundColor: '#FFC55A', marginLeft: '88px' }}>
                  <button type="submit" className="btn" style={{ width: '180px' }}>
                      <div className="btn-name">
                          <Link to="/identity" style={{ textDecoration: 'none', color: 'black' }}> 
                              <h3 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Login</h3>
                          </Link>
                      </div>
                  </button>
              </div>

              <div className="logo text-center p-2">
                  <Link to="">
                      <Image src={Facebook} className={styles.image} style={{ height: '40px', margin: '5px' }}/>
                  </Link>
                  
                  <Link to="">
                      <Image src={Google} className={styles.image} style={{ height: '40px', margin: '5px' }}/>
                  </Link>

                  <Link to="">
                      <Image src={Apple} className={styles.image} style={{ height: '40px', margin: '5px' }}/>
                  </Link>
              </div>
              
              <div className={styles["have-account"]}>
                  <div className="forgot" style={{ fontWeight: 'bold', textAlign: 'center', margin: '5px' }}>
                      <Link to="" style={{ textDecoration: 'none', color: '#4D7498' }}>Forgot Password?</Link>
                  </div>

                  <div className="regist mb-3" style={{ fontWeight: 'bold', textAlign: 'center', margin: '5px' }}>
                      <Link to="/signUp" style={{ textDecoration: 'none', color: '#4D7498' }}>Create an Account!</Link>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
export default Login
