import React from 'react'
import Icon1 from '../images/Mern.svg';
import Icon2 from '../images/webflow.jpg';
import Icon3 from '../images/logo.png';
import styled from "styled-components";


export const ServicesContainer=styled.div`
height: 800px;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
background-color:#fff;
h1{
    font-size: clamp(1.5rem,6vw,1.5rem);
    grid-column-gap:0rem;
    text-align: center;

}
@media screen and (max-width:1200px)
{
    height: 1600px;
  padding-top:0rem;
  padding-bottom:10rem;
  justify-content:start;
  
}
@media screen and (max-width:768px)
{
  height: 1700px;
  justify-content:start;
  padding-top:1rem;
  padding-bottom:0rem;

}
@media screen and (max-width:556px)
{
  height:1700px;
    padding-top:0rem;
  padding-bottom:0rem;
  justify-content:start;
 

}
@media screen and (max-width:480px)
{
    height:1500px;
    padding-top:0rem;
  padding-bottom:0rem;
  justify-content:start;
 

}


`;
export const ServicesWrapper=styled.div`
max-width:1000px;
margin: 0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;

@media screen and (max-width:1200px)
{
    grid-template-columns: 1fr;
    padding:0 20px;
    max-height:2000px;

}

@media screen and (max-width:480px)
{
    grid-template-columns:1fr;
    padding:0 20px;
    max-height:400px;
}
`;
export const ServicesCard=styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
max-height:380px;
box-shadow:  0 3px  8px rgba(0,0,0,0.4);
transition:all 0.2 ease-in-out;

&:hover{
    transform:scale(1.02) ;
    transition:all 0.2 ease-in-out;
    cursor:pointer;
}
`;
export const ServicesIcon=styled.img`
height:300px;
width:100%;
object-fit: cover;
margin-bottom: 10px;
`;
export const ServicesH1=styled.h1`
font-size:2.5rem;
color:black;
margin-bottom:2rem;


@media screen and (max-width:480px)
{
    font-size: 2rem;


}


`;
export const ServicesH2=styled.h2`
    font-size:1rem;
    margin-bottom:10px;
    font-weight:bold;
`;
export const ServicesP=styled.p`
font-size:1rem;
text-align:center; 

`;





const Services = () => {
    return (
     <ServicesContainer id="services">
         <ServicesH1>SERVICES</ServicesH1>
         <ServicesWrapper>
             <ServicesCard>
               <ServicesIcon src={Icon1}/>  
               <ServicesH2>lorem</ServicesH2>
               <ServicesP>lorem ipsum dolor sit amet, consectetur adip</ServicesP>

               </ServicesCard>
             <ServicesCard>
               <ServicesIcon src={Icon2}/>  
               <ServicesH2>Reduce expenses</ServicesH2>
               <ServicesP>lorem ipsum dolor sit amet, consectetur adiprevenue</ServicesP>
            
             </ServicesCard>
             <ServicesCard>
               <ServicesIcon src={Icon3}/>  
               <ServicesH2>Reduce expenses</ServicesH2>
               <ServicesP>lorem ipsum dolor sit amet, consectetur adiprevenue</ServicesP>
               </ServicesCard>
         </ServicesWrapper>
     </ServicesContainer>
    );
};

export default Services;
