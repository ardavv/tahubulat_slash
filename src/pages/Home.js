import React from 'react'
import "../style/homeLogin.css"
import Button from 'react-bootstrap/Button'
import { Form, Card, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "../App.css"
import Navbar from '../components/NavigationBar.js'

function Home(){
    return(
        <div className='homeBG'>
            <Navbar/>
        </div>
    )
}
export default Home

