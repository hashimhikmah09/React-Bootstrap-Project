import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container,} from 'react-bootstrap';
import Group from '../../asset/images/Group.svg';
import CustomButton from '../button/button';
import '../../asset/styles/NavStyle.css';

const Header = () => {
    return( 
        <div className='NavStyle'>
            {/* Navbar */}
            <Navbar className='CustomNavbar' bg='white' expand='lg'>
                <Container>
                <Navbar.Brand as={NavLink} to="/" className='branded'>
                    <img src={Group} className='img-fluid img' alt='Group'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Link as={NavLink} to='/' className={({ isActive }) => isActive ? "active" : ""}> Blog </Nav.Link> 
                    <Nav.Link as={NavLink} to='/platforms' className={({ isActive }) => isActive ? "active" : ""}> Platforms </Nav.Link> 
                    <Nav.Link as={NavLink} to='/resources' className={({ isActive }) => isActive ? "active" : ""}> Resources</Nav.Link> 
                    <Nav.Link as={NavLink} to='/scholarships' className={({ isActive }) => isActive ? "active" : ""}> Scholarships </Nav.Link> 
                    <Nav.Link as={NavLink} to='/shop' className={({ isActive }) => isActive ? "active" : ""}> Shop </Nav.Link> 
                    <Nav.Link as={NavLink} to='/faq' className={({ isActive }) => isActive ? "active" : ""}> FAQ </Nav.Link> 
                    <Nav.Link as={NavLink} to='/Getstarted' className={({ isActive }) => isActive ? "active" : ""}> 
                        {/* REUSABLE BUTTON */}
                        <CustomButton variant="primary">Get Started</CustomButton>
                    </Nav.Link> 
              </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default Header;