import React from 'react'
import "../style/homeLogin.css"
import Button from 'react-bootstrap/Button'
import { Form, Card, Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "../App.css"
import Navbar from '../components/NavigationBar.js'
import page from '../assets/img/page1.png'

function Home() {
    return(
        <>
            <Navbar activeKey="/home"/>
            <div className='homeBG'>
            <Image src={page} />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat semper est, ut dignissim lacus cursus et. Suspendisse euismod at nunc quis sagittis. Fusce vitae egestas lorem. Etiam ornare est vitae enim imperdiet, sed tincidunt velit bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam mauris metus, egestas et libero quis, facilisis vehicula eros. Vestibulum non laoreet risus, ut vulputate nisl.
                </p> 
                <p>Cras feugiat tristique tincidunt. Aenean et gravida turpis, id vulputate dui. Ut risus dui, vulputate nec sem ut, consequat tristique libero. Duis quis urna fringilla velit volutpat tincidunt. Proin elementum vulputate tellus eu scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi consectetur, neque ut rutrum sollicitudin, velit ipsum blandit felis, vitae pharetra diam dui in nibh.</p>
            </div>
        </>
    );
}

export default Home