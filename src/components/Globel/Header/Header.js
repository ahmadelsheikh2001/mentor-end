
import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png'
import './Header.css';
import { Button, Container, Nav, Navbar, Offcanvas, Form } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';


function Header() {
  const [isClick, setIsClick] = useState(false)
  const user = {
    id: 1,
    username: "balqees saber",
    img: "https://image.lexica.art/md2/c7a4ec7a-e570-4ef8-8c0e-e87ec0ab8587",
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
      
      </Container>
    </Navbar>
    // <></>
  )
}

export default Header
//   return (
//     <>
//        <Navbar className="">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               src={logo}
//               width="120"
//               height="40"
//               className="d-inline-block align-top"
//               alt="logo"
//             />
//           </Navbar.Brand>
//         </Container>
//       </Navbar>
//     </>
//   )
// }

// export default Header;