
import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png'
import './Header.css';
import { Button, Container, Nav, Navbar, Offcanvas, Form } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';


function HeaderWithSearch() {
    const [isClick, setIsClick] = useState(false)
    const user = {
        id: 1,
        username: "balqees saber",
        img: "https://image.lexica.art/full_jpg/cfaf34e4-c244-4e5d-8925-ee72ba60e35f",
        job_title: "software developer",
        isActive: true,
        userType: 'mentee'
    };
    return (
        <Navbar >
            <Container>
                <Navbar.Brand >
                    <img
                        src={logo}
                        width="70%"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }} />


                {/* if user is active show form and menu */}
                {user.isActive ? (
                    <>
                        <Navbar.Offcanvas id="basic-navbar-nav" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
                            <Offcanvas.Header closeButton className='ms-auto'></Offcanvas.Header>
                            <Offcanvas.Body className='pt-sm-5 pt-lg-0 align-items-center'>
                                <Nav className="ms-auto">
                                    <Form className="d-flex flex-column-reverse flex-sm-row me-2">
                                        <div className='me-1' style={{
                                            border: '1px solid #808080a3',
                                            height: '50px',
                                            borderTopLeftRadius: '20px',
                                            borderBottomLeftRadius: '18px'
                                        }}>
                                            <Form.Select aria-label="Default select example" className='mySelect'>
                                                <option>UI Designer</option>
                                                <option>UI Designer</option>
                                                <option>UI Designer</option>
                                                <option>UI Designer</option>
                                            </Form.Select>
                                        </div>

                                        <div className="d-flex search " style={{ padding: '4px', border: '1px solid #808080a3' }}>
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                className="me-1"
                                                aria-label="Search"
                                            />
                                            <Button className='btn btn-dark rounded-circle'>
                                                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                                                <BiSearch className='search-icon' />
                                            </Button>
                                        </div>
                                    </Form>
                                    <Nav.Link href="#" className='user-item ' onClick={() => setIsClick(!isClick)} style={{ paddingTop: '5px' }}>
                                        <div className='color-gray rounded-pill text-capitalize fw-bold'>
                                            <img src={user.img} alt='user-img' className='rounded-circle me-4' width={40} height={40} />
                                        </div>
                                        {/* to click in pic user display links */}
                                        {isClick && (<ul className="nav flex-column menu p-3 text-center">
                                            <li className="nav-item px-3">
                                                <div className='d-flex align-items-center '>
                                                    <img src={user.img} alt='user-img' className="rounded-circle me-3" width={60} height={60} />
                                                    <p className='align-self-center fw-bold text-capitalize text-start'>
                                                        <span className='d-block text-white'>{user.username}</span>
                                                        <span className='d-block text-white'>{user.job_title}</span>
                                                    </p>
                                                </div>
                                                <a href="#" className="nav-link btn d-block py-2 px-4 rounded-pill  mt-3 mx-auto text-white fw-bold text-capitalize btnUser" > view profile</a>
                                            </li>
                                            <li className="nav-item text-start d-lg-none">
                                                <a href="#" className="nav-link text-light text-capitalize fw-bold" >edit profile</a>
                                            </li>
                                            {/* if user type mentee show some links , is not show others links */}
                                            {user.userType === "mentee" ? (
                                                <>
                                                    <li className="nav-item text-start d-lg-none">
                                                        <a href="#" className="nav-link text-light text-capitalize fw-bold" >my requests</a>
                                                    </li>
                                                    <li className="nav-item text-start d-lg-none">
                                                        <a href="#" className="nav-link text-light text-capitalize fw-bold" >post a new request</a>
                                                    </li>
                                                    <li className="nav-item text-start d-lg-none">
                                                        <a href="#" className="nav-link text-light text-capitalize fw-bold">new mentoring request</a>
                                                    </li>
                                                    <li className="nav-item text-start d-lg-none">
                                                        <a href="#" className="nav-link text-light text-capitalize fw-bold" > edit request</a>
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li className="nav-item text-start d-lg-none">
                                                        <a href="#" className="nav-link text-light text-capitalize fw-bold">my opportunities</a>
                                                    </li>
                                                    <li className="nav-item text-start d-lg-none">
                                                        <a href="#" className="nav-link text-light text-capitalize fw-bold" >post a new opportunity</a>
                                                    </li>
                                                    <li className="nav-item text-start d-lg-none">
                                                        <a href="#" className="nav-link text-light text-capitalize fw-bold">view mentoring opportunity</a>
                                                    </li>
                                                    <li className="nav-item text-start d-lg-none">
                                                        <a href="#" className="nav-link text-light text-capitalize fw-bold" > edit opportunity</a>
                                                    </li>
                                                </>
                                            )}
                                            <li className="nav-item text-start">
                                                <a href="#" className="nav-link text-light text-capitalize fw-bold" >help</a>
                                            </li>
                                            <li className="nav-item"><hr className="divider bg-white m-0" /></li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link text-light text-capitalize fw-bold" >log out</a>
                                            </li>
                                        </ul>)}
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </>
                ) : ""}
            </Container>
        </Navbar>
        // <></>
    )
}

export default HeaderWithSearch

