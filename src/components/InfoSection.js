import React from 'react'
import styled from 'styled-components';
// import { Button } from './Button';
import {FaGithubSquare,FaInstagram,FaYoutube,FaLinkedin} from  "react-icons/fa";
// import {Link} from 'react-router-dom';


const Section = styled.section`
@media screen and (max-width:768px)
{
    padding-left:0.8rem;
    padding-bottom: 0rem;
   
  
}



width:100%;
height:100%;
h1
{
    
    font-size: clamp(1.5rem,6vw,1.5rem);
    grid-column-gap:0rem;
    text-align: center;
  
}

`;
const Container=styled.div`
padding-top: 3rem;
padding-left: 3rem;
padding-right: 3rem;
padding-bottom: 0rem;
display: grid ;
grid-template-columns:1fr 1fr ;
grid-template-rows:800px;
grid-column-gap:5rem;

@media screen and (max-width:1200px)
{
    grid-template-columns: 1fr;
    padding-bottom: 0rem;
    grid-template-rows:425px;
    grid-column-gap:0rem;
    padding:0;

}
@media screen and (max-width:939px)
{
    grid-template-columns: 1fr;
    padding-bottom: 0rem;
    grid-template-rows:500px;
    grid-column-gap:0rem;
    padding:0;

}


@media screen and (max-width:768px)
{
    grid-template-columns: 1fr;
    padding-bottom: 0rem;
    grid-template-rows:450px;
    grid-column-gap:0rem;
    padding:0;
}
@media screen and (max-width:556px)
{
    grid-template-columns: 1fr;
    padding-bottom: 0rem;
    grid-template-rows:525px;
    grid-column-gap:0rem;
    padding:0;
}
@media screen and (max-width:480px)
{
    grid-template-columns: 1fr;
    padding-bottom: 0rem;
    grid-template-rows:530px;
    grid-column-gap:0rem;
    padding:0;

}
@media screen and (max-width:360px)
{
    grid-template-columns: 1fr;
    padding-bottom: 0rem;
    grid-template-rows:558px;
    grid-column-gap:0rem;
    padding:0;

}

    @media screen and (max-width:335px)
{
    grid-template-columns: 270px;
    padding-bottom: 0rem;
    grid-template-rows:655px;
    grid-column-gap:0rem;
    padding:0;

}


`;
const ColumnLeft=styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
line-height:1.9 ;
grid-column-gap:0rem;

/* padding: 1rem 2rem; */

order:${({reverse})=>(reverse ? '2':'1')} ;

p
{
    margin-bottom: 0rem;
    font-size:1.4rem;
    grid-column-gap:0rem;
    @media screen and (max-width:768px)
{
    font-size:1rem;
    letter-spacing:1.4;
    line-height:1.8 ;


}
}
`;
const ColumnRight=styled.div`

order:${({reverse})=>(reverse ? '1':'2')};
justify-content: start;
align-items:start ;
line-height:1.9 ;
@media screen and (max-width:768px)
{
    order: ${({reverse})=>(reverse ? '2' : '1')};
    padding-top: 5rem;
    padding-bottom:0rem;
    margin-top: -230px;
    
}
@media screen and (max-width:480px)
{
    margin-top: -140px;
    
}
@media screen and (max-width:320px)
{
    margin-top: -100px;
  
    
}
h1
{
    
    font-size: clamp(1.5rem,6vw,1.5rem);
}
p
{
    margin-bottom: 0rem;
    font-size:1.4rem;
    @media screen and (max-width:768px)
{
    font-size:1rem;
    letter-spacing:1.4;
    line-height:1.8;


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


 


const  InfoSection=({heading,paragraphOne,paragraphTwo,reverse,paragraphThree,paragraphFour,paragraphFive,paragraphSix,paragraphSeven,paragraphEight,Education,majorProjectsforclients,clients,Educationfirst,headingTwo})=> {
    return (
       <Section className="about">
           <h1>ABOUT</h1>
             <Container>
                 <ColumnLeft>
               
               
                 <p style={{fontWeight:"550"}}>
                     {paragraphOne}
                 </p>
                 <p>{paragraphTwo}</p>
                

                 {/* <Button to="homes" primary={true}>{buttonLabel}</Button> */}
                 </ColumnLeft>
                 <ColumnRight reverse={reverse}>
                {/* <img src={Image} alt="home"/> */}
                 
                 <p style={{fontWeight:"550"}}>
                     {paragraphThree}
                 </p>
                 <p >{paragraphFour}</p>
                 <p style={{fontWeight:"550"}}>{paragraphFive}</p>
                 <p >{paragraphSix}</p>
                 <p style={{fontWeight:"550"}}>{Educationfirst}</p>
                 <p >{Education}</p>
                 <p style={{fontWeight:"550"}}>{paragraphSeven}</p>
                 <p>{paragraphEight}</p>
                 <p style={{fontWeight:"550"}}>{clients}</p>
                 <p>{majorProjectsforclients}</p>
                

                 <SocialIcons>
                                <SocialIconLink href="/" target="_blank" area-label="Github"><FaGithubSquare/></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" area-label="Instagram"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" area-label="Youtube"><FaYoutube /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" area-label="LinkedIn"><FaLinkedin /></SocialIconLink>

                                </SocialIcons>   
                 </ColumnRight>
               
             </Container>
      </Section>
    )
}

export default InfoSection;
