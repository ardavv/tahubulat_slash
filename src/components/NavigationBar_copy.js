
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import "../style/homeLogin.css";
import "../style/navigationBar.css";
import HomeIcon from '../assets/img/icons/home.png';
import VideoIcon from '../assets/img/icons/video.svg';
import TaskIcon from '../assets/img/icons/task.svg';
import LibraryIcon from '../assets/img/icons/library.svg';
import ProfilePict from '../assets/img/profile.webp';
import { useState } from "react";

const CustNavLink = ({ icon, name, goTo }) => {
    const curPath = useLocation().pathname;
    const isActive = curPath === goTo;
    return (
        <Link to={goTo} className={`nav-icon-link ${isActive ? 'active' : ''}`}>
            <Image className="nav-icon" src={icon} />
            <span className="nav-cust-span">{name}</span>
        </Link>
    );
};

const NavigationBar = () => {
    const [activeNav, setActiveNav] = useState(null);
    const navs = [
        { icon: HomeIcon, name: 'Home', goTo: '/home' },
        { icon: VideoIcon, name: 'Video', goTo: '/learning' },
        { icon: TaskIcon, name: 'Task', goTo: '' },
        { icon: LibraryIcon, name: 'Library', goTo: '' },
    ];

    const handleProfileClick = () => {
        setActiveNav('profile');
    };

    const handleProfileBlur = () => {
        setActiveNav(null);
    };

    return (
        <Navbar id="mainNavbar" expand="lg" className="navbar-expand-lg" style={{ fontWeight: 'bold', fontSize: 'larger', paddingLeft: '30px' }}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/home">TahuBulat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="pills" className="me-auto">
                        {navs.map((nav) => (
                            <CustNavLink key={nav.name} icon={nav.icon} name={nav.name} goTo={nav.goTo} />
                        ))}
                        <div style={{ width: '4px', height: '80px', backgroundColor: 'white', borderRadius: '20px', margin: '0 10px' }}></div>
                        <div className="d-flex align-items-center justify-content-center nav-icon-link outer-profile">
                            <NavDropdown
                                title="Profile"
                                id="profileDropdown"
                                onFocus={handleProfileClick}
                                onBlur={handleProfileBlur}
                            >
                                <NavDropdown.Item className="profile-dropdown-item" href="#action/3.1">
                                    My Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item className="profile-dropdown-item" href="#action/3.2">
                                    Friends
                                </NavDropdown.Item>
                                <NavDropdown.Item className="profile-dropdown-item" href="#action/3.3">
                                    Mystery Game
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <Link to="/login">
                                    <NavDropdown.Item className="profile-dropdown-item" href="#action/3.4">
                                        Log Out
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                            <Image className="user-prof-pict" src={ProfilePict} />
                            <span className="nav-cust-span">Username</span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;