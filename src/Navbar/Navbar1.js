import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, NavLink } from 'react-router-dom';
import "./Navbar.css"
import React from 'react';
const Navbar1 = (prop) => {
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
    const SignUp = () => { 
        navigate("/walletCard");

    }
    
    return (
        <div className='head'>
            <div className='nav_head' >
                <div className="navbar" >
                    <Navbar bg="red" expand="lg" >
                        <Container>
                            <Navbar.Brand className="heading1" style={{padding:"0px",margin:"0px"}} href="#home">MYTIME</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <div className='small'>
                                        <Nav.Link className='smallItem' onClick={Home}>Home</Nav.Link>
                                        <Nav.Link className='smallItem' onClick={Sch_meet}>Scheduled_Meeting</Nav.Link>
                                        <Nav.Link className='smallItem' onClick={Calender}>New_Meeting</Nav.Link>
                                        <div className='sign'>
                                            {!(prop.data) ? (<Nav.Link className='smallItem signInside' onClick={SignUp}>SignIn/SignUp</Nav.Link>)
                                            :(<Nav.Link className='smallItem signInside' onClick={SignUp}>Welcome</Nav.Link>)
                                            }
                                        </div>
                                    </div>
                                    <div className='large'>
                                    <NavLink className="item" to="/" >Home</NavLink>
                                    <NavLink className="item" to="/calender" >New Meeting</NavLink>
                                    <NavLink className="item" to="/walletCard" >Scheduled Meet</NavLink>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
            <div className="section2">
          
                {(!prop.data) ? (<NavLink className="button1" to="/walletCard" >SignUp/SignIn</NavLink>)
                    : (<NavLink className="button1" to="/walletCard" >Welcome</NavLink>)}
            </div>
            {/* {prop.data} */}
        </div>
    )
}
export default Navbar1;