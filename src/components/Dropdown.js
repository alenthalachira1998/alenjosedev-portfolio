import React,{ useState,useEffect} from 'react'
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
// import {Link} from  'react-router-dom';
import {FaTimes} from 'react-icons/fa'
// import { IoRepeat } from 'react-icons/io5';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from "react-scroll";
// import {FaBars} from 'react-icons/fa';
import {FaGithubSquare,FaInstagram,FaYoutube,FaLinkedin} from  "react-icons/fa";
import { Modal } from "react-bootstrap";
const DropdownContainer=styled.div`
position:fixed ;
z-index: 999;
width: 100%;
height: 100%;
background:#8e44ad;
display: grid;
align-items: center;
top: 0;
left: 0;
transition:  0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen ? '1': '0')};
top:${({isOpen})=>(isOpen ? '0': '-100%')}; 
`;
const Icon=styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;
const  CloseIcon=styled(FaTimes)`
color: #000d1a;
 
`;
const DropdownWrapper=styled.div``;
const DropdownMenu=styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4,80px);
text-align:center;
margin-bottom: 4rem;
@media screen and (max-width:480px)
{
    grid-template-rows:repeat(4,60px)
}
`;
const DropdownLink=styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
color:#fff;
font-size:1.5rem;
text-decoration: none;
cursor: pointer;
transition: 0ms.2s ease-in-out;


&:hover{

    color:#000d1a ;
}

`;
const BtnWrap=styled.div`
display: flex;
justify-content: center;
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


const Dropdown = ({isOpen,toggle}) => {
    const [scrollNav,setScrollNav]=useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const changeNav=()=>{
        if(window.scrollY>=80)
        {
          setScrollNav(true);
        }
        else{
          setScrollNav(false);
        }
      }
      useEffect(()=>{
          window.addEventListener('scroll',changeNav)
        },[]);
        const toggleHome=()=>{
            scroll.scrollToTop();
          }
    return (
      <DropdownContainer isOpen={isOpen} onClick={toggle} scrollNav={scrollNav} >
       <Icon onClick={toggle}>
           <CloseIcon/>
       </Icon>
       <DropdownWrapper>
          <DropdownMenu >
              
                  {menuData.map((item,index)=>(
                 
                      <DropdownLink onClick={toggle} to={item.link} key={index} smooth={true} duration={1} spy={true} exact='true'  offset={-73}  activeClass="active">
                          {item.title}
                      </DropdownLink>
                  ))}
              </DropdownMenu> 
              <BtnWrap>
                  <Button to='home' variant="primary" big="false"  primary='true'  onClick={() => setModalShow(true)}>Contact US </Button> 
                <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
              </BtnWrap>
       </DropdownWrapper>
      </DropdownContainer>
    )
    
};

export default Dropdown
