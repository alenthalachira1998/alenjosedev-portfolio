import React,{useState,useEffect} from "react";
import styled,{css} from "styled-components/macro";
import {Link} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from "react-scroll";
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
// import  Modal from'react-bootstrap/ModalHeader';
import { Modal } from "react-bootstrap";
import {FaGithubSquare,FaInstagram,FaYoutube,FaLinkedin} from  "react-icons/fa";

const Nav=styled.nav`
height:60px;
display: flex;
background:${({scrollNav})=>(scrollNav ? '#FFFF':'transparent')};
justify-content: space-between;
padding: 1rem 2rem;
z-index: 100;
position: fixed;
width: 100%;
text-decoration: none;
 `;

const NavLink=css`
color: black;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`;
const Logo=styled(Link)`
${NavLink}
color:black;
font-style:italic,bold; 
`;

const MenuBars=styled(FaBars)`
display:none;
font-size: 30px;
color:black;
@media screen and (max-width:768px)
   {
       display: block;
   }
   `;
const NavMenu=styled.i`
  display: flex;
   align-items: center;
   margin-right:-48px;
   @media screen and (max-width:768px)
   {
       display: none;
   }
   `;
const NavMenuLinks=styled(LinkS)`
${NavLink}
&.active{
       color:#ee5253;
    }
 
   `;
 
const NavBtn=styled.div`
display: flex;
align-items: center;
margin-right:24px;
@media screen and (max-width:768px)
   {
       display: none;
   }
`;

function MyVerticallyCenteredModal(props) {
 const SocialIconLink=styled.a`
  color:black;
  padding-bottom: 2rem;
  font-size: 50px;
  
  `;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Phone:</h4>
        <p>
          +91 7090890541
          
        </p>
        <h4>Email:</h4><p>alenthalachira.official@gmail.com</p>
        <h4>SocialMedia</h4>
        <SocialIconLink href="/" target="_blank" area-label="Github"><FaGithubSquare/></SocialIconLink>
         <SocialIconLink href="/" target="_blank" area-label="Instagram"><FaInstagram /></SocialIconLink>
         <SocialIconLink href="/" target="_blank" area-label="Youtube"><FaYoutube /></SocialIconLink>
        <SocialIconLink href="/" target="_blank" area-label="LinkedIn"><FaLinkedin /></SocialIconLink>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



  
const Navbar = ({toggle}) => {
  const [modalShow, setModalShow] = React.useState(false);
    const [scrollNav,setScrollNav]=useState(false);
    const changeNav=()=>{
      if(window.scrollY>=80)
      {
        setScrollNav(true);
      }
      else{
        setScrollNav(false)
      }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
      },[]);
      const toggleHome=()=>{
        scroll.scrollToTop();
      }
    return (
        <div>
        <Nav scrollNav={scrollNav}>
            <Logo to="home" onClick={toggleHome} >
               ALEN
            </Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu> 
            {
                menuData.map((item,index)=>(
                
                    <NavMenuLinks  to={item.link} key={index} smooth={true} duration={1} spy={true} exact='true'  offset={-80}  activeClass="active" >
                      {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button primary="true" round="true"  to="contact"  variant="primary" onClick={() => setModalShow(true)}>Contact US </Button> 
                <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </NavBtn>
        </Nav>
        </div>
    );
}

export default Navbar
