import React from 'react'
import styles from '../style/homeLogin.module.css';
import { Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Facebook from '../assets/img/facebook.svg'
import Google from '../assets/img/google.svg'
import Apple from '../assets/img/apple.svg'

function Login() {
    return (
    <div className={styles.container} style={{ maxWidth: '396px', margin: '100px auto' }}>
    <div className={styles.signIn} style={{ backgroundColor: 'white', borderRadius: '20px', height: '525px' }}>

      <div className={`${styles.header} text-center mt-4 pt-3`}>
        <h1>Login to</h1>
        <h1>Continue</h1>
      </div>


      <form className="m-4">
        <div className="form-group">
          <label htmlFor={styles.inputEmail} className={styles.nameForm}>Your Email : </label>
          <input type="email" className="loginForm form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }} />
        </div>

        <br />

        <div className="form-group">
          <label htmlFor="inputPassword" className={styles.nameForm}>Password :</label>
          <input type="password" className="loginForm form-control" id="inputPassword" placeholder="Password" style={{ width: '100%', backgroundColor: '#E8E8E8', border: '2px solid black' }} />
        </div>

        <div className={`${styles.submit} mt-4`} style={{ textAlign: 'center' }}>
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
                <Image src={Facebook} className={styles.image} />
            </Link>
            
            <Link to="">
                <Image src={Google} className={styles.image} />
            </Link>

            <Link to="">
                <Image src={Apple} className={styles.image} />
            </Link>
        </div>
        
        <div className={styles["have-account"]}>
            <div className="forgot">
                <Link to="" style={{ textDecoration: 'none', color: '#4D7498' }}>Forgot Password?</Link>
            </div>

            <div className="regist mb-3">
                <Link to="/signUp" style={{ textDecoration: 'none', color: '#4D7498' }}>Create an Account!</Link>
            </div>
        </div>
      </form>
    </div>
  </div>
    )
}
export default Login
