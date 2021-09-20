import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaInstagram,FaYoutube,FaLinkedin} from  "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export const FooterContainer=styled.footer`
background-color: #101522;

@media screen and (max-width:480px)
{
    flex-direction: column;
    


}
`;
export const FooterWrap=styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
max-width:1000px;
margin: 0 auto;
`
export const FooterLinksContainer=styled.div`
display: flex;
justify-content:center;

@media screen and (max-width:820px)
{
    padding-top: 32px;

}

`;
export const FooterLinksWrapper=styled.div`
display: flex;


@media screen and (max-width:820px)
{
    flex-direction: column;


}

`;

export const FooterLinkItems=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin:16px ;
text-align: left;
width:160px;
box-sizing: border-box;
color:#fff;

@media screen and (max-width:420px)
{
    margin: 0;
    padding: 10px;
    width: 100%;

}
`;

export const FooterLinkTitle=styled.h1`
font-size:14px ;
margin-bottom:16px ;
`;
export const FooterLink=styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size:14px;

&:hover
{
    color: #01bf71;
    transition: 0.3s ease-out;
}
`;
export const SocialMedia=styled.section`
max-width: 1000px;
width:100%;
`;
export const SocialMediaWrap=styled.div`
display:flex;
justify-content: space-between;
align-items:center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media only screen and (max-width:820px) {
    flex-direction: column;

}


`;
export const SocialLogo=styled(Link)`
color:#fff;
justify-self:start;
cursor:pointer;
font-size:1.5rem;
text-decoration: none;
font-size:none;
display:flex;
align-items:center;
margin-bottom: 16px;
font-weight:bold;


`;
export const WebsiteRights=styled.small`
color:#fff;
margin-bottom:16px;

`;

export const SocialIcons=styled.div`
display: flex;
justify-content:space-between;
align-items:center;
width: 240px;


`;
export const SocialIconLink=styled.a`
color:#fff;
font-size: 24px;
`;










const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop();
      }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                               ALEN
                            </SocialLogo>
                            <WebsiteRights>
                                alenjose {new Date().getFullYear()}

                                &copy;  All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" area-label="Instagram"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" area-label="Youtube"><FaYoutube /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" area-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer;
