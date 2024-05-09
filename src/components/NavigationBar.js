import { Link, useLocation } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap"
import "../style/homeLogin.css"
import "../style/navigationBar.css"
import HomeIcon from '../assets/img/icons/home.png'
import VideoIcon from '../assets/img/icons/video.svg'
import TaskIcon from '../assets/img/icons/task.svg'
import LibraryIcon from '../assets/img/icons/library.svg'
import ProfilePict from '../assets/img/profile.webp'
// import LearningIcon from '../assets/img/icons/learning.png'
// import PlaygroundIcon from '../assets/img/icons/playground.svg'
// import CreativeLabIcon from '../assets/img/icons/creativeLab.png'

const CustNavLink = ({ icon, name, goTo }) => {
    const curPath = useLocation().pathname;
    const newId = curPath === goTo? "activeNav" : "";
    const newClass = curPath === goTo? "active" : "";
    return (
        <>
            <Link id={newId} className={newClass + ' nav-icon-link'} to={goTo}>
                    <Image className="nav-icon" src={icon}></Image>
                    <br></br>
                    <span className="nav-cust-span">{name}</span>
            </Link>
        </>
    )
}

const FakeProfileClickHandler = (e) => {
    const elt = document.getElementById("profileDropdown");
    elt.click();
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
    const navs = [
        {icon: HomeIcon, name: 'Home', goTo: '/home'},
        {icon: VideoIcon, name: 'Video', goTo: '/learning'},
        {icon: TaskIcon, name: 'Task', goTo: '/task'},
        {icon: LibraryIcon, name: 'Library', goTo: ''}
    ];

    return (
        <>
            <div id="belowNavbar"></div>
            <Navbar id='mainNavbar' style={{ fontWeight: 'bold', fontSize: 'larger', paddingLeft: '30px' }}>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/home">Playgram</Navbar.Brand>
                    <Nav variant="pills">
                        {navs.map((nav) => 
                            <CustNavLink icon={nav.icon} name={nav.name} goTo={nav.goTo} />
                        )}
                        <div style={{width: '4px', height: '80px', backgroundColor: 'white', borderRadius: '20px', margin: '0 10px'}}></div>
                        <div className="d-flex align-items-center justify-content-center nav-icon-link outer-profile" onClick={FakeProfileClickHandler}>
                            <NavDropdown title="Profile" id="profileDropdown" onFocus={ProfileInHandler} onBlur={ProfileOutHandler}>
                                <NavDropdown.Item className="profile-dropdown-item" href="#action/3.1">My Profile</NavDropdown.Item>
                                <NavDropdown.Item className="profile-dropdown-item" href="#action/3.2">Friends</NavDropdown.Item>
                                <NavDropdown.Item className="profile-dropdown-item" href="#action/3.3">Mystery Game</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="profile-dropdown-item" href="#action/3.4">
                                    <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                                        Log Out
                                    </Link>
                                    </NavDropdown.Item>
                            </NavDropdown>
                            <Image className='user-prof-pict' src={ProfilePict}></Image>
                            <span className="nav-cust-span">Username</span>
                        </div>
                        {/* </Link> */}
                    </Nav>
                </Container>
            </Navbar>

            <br />
        </>
    )
}

export default NavigationBar