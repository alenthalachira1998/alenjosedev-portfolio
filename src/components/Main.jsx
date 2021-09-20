import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import {FaGithubSquare,FaInstagram,FaYoutube,FaLinkedin} from  "react-icons/fa";


const Section = styled.section`
width:100%;
height:100%;
margin-bottom: 3rem;

`;
const Container=styled.div`
padding: 3rem;
display: grid  ;
grid-template-columns:1fr 1fr ;
grid-template-rows:800px;

@media screen and (max-width:768px)
{
    grid-template-columns: 1fr;
    padding: 0rem;
    grid-template-rows:400px;
   
}
`;
const ColumnLeft=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height:1.4 ;
padding: 1rem 2rem;
order:${({reverse})=>(reverse ? '2':'1')} ;
h1
{
    @media screen and (min-width:1201px)
{
    font-size:5rem;
    font-weight:bold;
   
}
    
    /* font-size:clamp(1.5rem,2rem,10rem); */
    @media screen and (max-width:1200px)
{
    font-size:5rem;
   
}
@media screen and (max-width:768px)
{
    font-size:2.5rem;
    font-weight:bold;
   
}
 @media screen and (max-width:480px)
{
    font-size:1.5rem;
    font-weight:bold;
   
}


}
p
{
    margin-bottom: 0rem;
}
@media screen and (max-width:768px)
{
    grid-template-columns: 1fr;
    padding-bottom: 0rem;
    align-items: flex-start;
   
}
`;
const ColumnRight=styled.div`
padding: 1rem 2rem;
order:${({reverse})=>(reverse ? '1':'2')};
justify-content: center;
align-items: center;
@media screen and (max-width:768px)
{
    order: ${({reverse})=>(reverse ? '2' : '1')};
    
}
img
{
    width:100%;
    height:100%;
    object-fit:cover;
    @media screen and(max-width:768px)
    {
        width:90%;
        height: 90%;
    }
}

`;

export const SocialIcons=styled.div`
display: flex;
justify-content:space-between;
align-items:center;
width: 240px;


`;
export const SocialIconLink=styled.a`
color:black;
padding-bottom: 2rem;
font-size: 50px;

`;


 


const  Main=({heading,paragraphOne,paragraphTwo,buttonLabel,Image,reverse})=> {
    return (
       <Section>
             <Container>
                 <ColumnLeft>
               
                 <h1>{heading}</h1>
                 <p>
                     {paragraphOne}
                 </p>
                 <p>{paragraphTwo}</p>
                 <SocialIcons>
                                <SocialIconLink href="/" target="_blank" area-label="Github"><FaGithubSquare/></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" area-label="Instagram"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" area-label="Youtube"><FaYoutube /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" area-label="LinkedIn"><FaLinkedin /></SocialIconLink>

                                </SocialIcons>   



                 <Button to="homes" primary={true}>{buttonLabel}</Button>
                 </ColumnLeft>
                 <ColumnRight reverse={reverse}>
                <img src={Image} alt="home"/>
                 </ColumnRight>
               
             </Container>
      </Section>
    )
}

export default Main;
