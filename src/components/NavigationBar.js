import { Link, useLocation } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap"
import "../style/homeLogin.css"
import "../style/navigationBar.css"
import HomeIcon from '../assets/img/icon_home.png'
import LearningIcon from '../assets/img/icon_learning.png'
import PlaygroundIcon from '../assets/img/icon_playground.svg'
import CreativeLabIcon from '../assets/img/icon_creativeLab.png'

const CustNavLink = ({ icon, name, goTo }) => {
    const curPath = useLocation().pathname;
    const newId = curPath === goTo? "activeNav" : "";
    const newClass = curPath === goTo? "active" : "";
    return (
        <>
            <Link id={newId} className={newClass + ' nav-icon-link'} to={goTo}>
                    <Image className="nav-icon" src={icon}></Image>
                    <span className="nav-cust-span">{name}</span>
            </Link>
        </>
    )
}

const ProfileClickHandler = (e) => {

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
            <Navbar data-bs-theme="danger" style={{ fontWeight: 'bold', fontSize: 'larger' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/home">TahuBulat</Navbar.Brand>
                    <Nav variant="pills">
                        <CustNavLink icon={HomeIcon} name="Home" goTo="/home" />
                        {/* <Link>
                            <Image className="nav-icon" src={HomeIcon}></Image>
                            <br></br>
                            <span className="nav-cust-span">Tess</span>
                        </Link> */}
                        <CustNavLink icon={LearningIcon} name="Learning" goTo="/learning" />
                        <CustNavLink icon={PlaygroundIcon} name="Playground" goTo="#" />
                        <CustNavLink icon={CreativeLabIcon} name="Creative Lab" goTo="#" />
                        <Link className="nav-icon-link">
                            <NavDropdown title="Profile" id="collapsible-nav-dropdown" onFocus={ProfileInHandler} onBlur={ProfileOutHandler}>
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
                        </Link>
                    </Nav>
                </Container>
            </Navbar>

            <br />
        </>
    )
}

export default NavigationBar