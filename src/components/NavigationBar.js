import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import "../style/homeLogin.css"

const NavigationBar = ({activeKey}) => {
    return (
        <>
            <Navbar bg='danger' data-bs-theme="danger" style={{ fontWeight: 'bold' }} defaultActiveKey={activeKey}>

                <Container>
                    <Navbar.Brand href="/home" >TahuBulat</Navbar.Brand>
                    <Nav variant="pills" >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/learning">Learning</Nav.Link>
                        <Nav.Link href="#playground">Playground</Nav.Link>
                        <Nav.Link href="#creative">Creative Lab</Nav.Link>
                        <NavDropdown title="Profile" id="collapsible-nav-dropdown">
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