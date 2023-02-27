import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, NavLink } from 'react-router-dom';
import "./Navbar.css"
import React from 'react';
const Navbar1 = () => {
    const navigate = useNavigate();
    const Home = () => { 
        navigate("/");
    }
    const Sch_meet = () => { 
        navigate("/sch_meet");
    }
    const Calender = () => { 
        navigate("/calender");
    }
    return (
        <div className='head'>
            <div className='nav_head' >
                <div className="navbar" >
                    <Navbar bg="red" expand="lg" >
                        <Container>
                            <Navbar.Brand className="heading1" href="#home">MYTIME</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <div className='small'>
                                        <Nav.Link className='smallItem' onClick={Home}>Home</Nav.Link>
                                        <Nav.Link className='smallItem' onClick={Sch_meet}>Scheduled_Meeting</Nav.Link>
                                        <Nav.Link className='smallItem' onClick={Calender}>New_Meeting</Nav.Link>
                                        <div className='sign'>
                                            <Nav.Link className='smallItem signInside' onClick={async() => await alert("yes we access")}>SignIn/SignUp</Nav.Link>
                                        </div>

                                    </div>
                                    <div className='large'>
                                    <NavLink className="item" to="/" >Home</NavLink>
                                    <NavLink className="item" to="/calender" >New Meeting</NavLink>
                                    <NavLink className="item" to="/sch_meet" >Scheduled Meet</NavLink>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
            <div className="section2">
                <button className="button" onClick={()=>alert("yes we access")}>Singnup/SignIn</button>


            </div>
        </div>
    )
}
export default Navbar1;