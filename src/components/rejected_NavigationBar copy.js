import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import home from '../assets/img/icon_home.png';
import learning from '../assets/img/icon_learning.png';
import playground from '../assets/img/icon_playground.svg';
import creativelab from '../assets/img/icon_creativeLab.png';
import profilePict from '../assets/img/profile.png'

const CustNavLink = ({ name, goTo, image }) => {
    const curPath = useLocation().pathname;
    return curPath === goTo ? 
        <Nav.Link id="activeNav" className="active" as={Link} to={goTo} style={{ marginRight: '20px', marginLeft: '20px', width: '130px', height: '120px', borderRadius: '30px' }}>
            <div className="d-flex flex-column align-items-center">
                <img src={image} width={50} height={50} className="m-2" alt="icon"/>
                <span style={{ textAlign: 'center' }}>{name}</span>
            </div>
        </Nav.Link> : 
        <Nav.Link as={Link} to={goTo} style={{ marginRight: '20px', marginLeft: '20px', width: '130px', height: '120px' }}>
            <div className="d-flex flex-column align-items-center">
                <img src={image} width={50} height={50} className="m-2" alt="icon" />
                <span style={{ textAlign: 'center' }}>{name}</span>
            </div>
        </Nav.Link>;
}

const ProfileInHandler = (e) => {
    const activeNav = document.getElementById("activeNav");
    activeNav.classList.toggle("active");
}

const ProfileOutHandler = (e) => {
    const activeNav = document.getElementById("activeNav");
    activeNav.classList.toggle("active");
}

const NavigationBar = () => {
    return (
        <>
            <Navbar data-bs-theme="danger" style={{ fontWeight: 'bold', fontSize: 'large', padding: '10px' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/home">TahuBulat</Navbar.Brand>
                    <Nav variant="pills">
                        <CustNavLink name="Home" goTo="/home" image={home} />
                        <CustNavLink name="Learning" goTo="/learning" image={learning} />
                        <CustNavLink name="Playground" goTo="#" image={playground} />
                        <CustNavLink name="Creative Lab" goTo="#" image={creativelab} />
                        <NavDropdown title={<div><Image src={profilePict} width={60} className="m-1" alt="profile" />Username</div>} id="collapsible-nav-dropdown" onFocus={ProfileInHandler} onBlur={ProfileOutHandler}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <br />
        </>
    )
}

export default NavigationBar;