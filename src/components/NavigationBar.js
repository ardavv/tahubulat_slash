import { Link, useLocation } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap"
import "../style/homeLogin.css"

const CustNavLink = ({ name, goTo }) => {
    const curPath = useLocation().pathname;
    return curPath === goTo ? 
        <Nav.Link id="activeNav" className="active" as={Link} to={goTo}>{name}</Nav.Link> : 
        <Nav.Link as={Link} to={goTo}>{name}</Nav.Link>;
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
            <Navbar data-bs-theme="danger" style={{ fontWeight: 'bold', fontSize: 'large' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/home">TahuBulat</Navbar.Brand>
                    <Nav variant="pills">
                        <CustNavLink name="Home" goTo="/home" />
                        <CustNavLink name="Learning" goTo="/learning" />
                        <CustNavLink name="Playground" goTo="#" />
                        <CustNavLink name="Creative Lab" goTo="#" />
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
                    </Nav>
                </Container>
            </Navbar>

            <br />
        </>
    )
}

export default NavigationBar