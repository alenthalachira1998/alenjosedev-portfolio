import React from 'react'
import Icon1 from '../images/Bakery.png';
import Icon2 from '../images/insta.png';
import Icon3 from '../images/mernblog.png';
import styled from "styled-components";


export const ServicesContainer = styled.div`
height: 900px;
display:flex;
flex-direction: column;
justify-content:flex-start;
align-items:center;
background-color:#fff;
h1{
    font-size: clamp(1.5rem,6vw,1.5rem);
    grid-column-gap:0rem;
    text-align: center;

}
@media screen and (max-width:1200px)
{
    height: 2150px;
  padding-top:0rem;
  padding-bottom:0rem;    
}

@media screen and (max-width:768px)
{
    height: 2050px;
  padding-top:0rem;
  padding-bottom:0rem;
}
@media screen and (max-width:556px)
{
    height: 2230px;
  padding-top:0rem;
  padding-bottom:0rem;
  margin-top:2rem;
}
@media screen and (max-width:480px)
{
    height:1870px;
    padding-bottom:0rem;
    padding-top:0rem;
    margin-top:0rem;
}
`;
export const ServicesWrapper = styled.div`
max-width:1000px;
margin: 0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:start;
grid-gap:16px;
padding:0 50px;

@media screen and (max-width:1200px)
{
    grid-template-columns: 1fr;
    max-width:1500px;
}

@media screen and (max-width:768px)
{
    grid-template-columns:1fr;
    padding:0 20px;

}
`;
export const ServicesCard = styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
max-height:300px;
box-shadow: 0 3px  8px rgba(0,0,0,0.4);
transition:all 0.2 ease-in-out;
@media screen and (max-width:1200px)
{
    grid-template-columns: 1fr;
    padding:0 20px;
    max-height:800px;
}

@media screen and (max-width:480px)
{
    grid-template-columns:1fr;
    padding:0 0px;
    max-height:320px;  
}


&:hover{
    transform:scale(1.02) ;
    transition:all 0.2 ease-in-out;
    cursor:pointer;
}
`;
export const ServicesIcon = styled.img`
height:300px;
width:100%;
object-fit: cover;
margin-bottom: 10px;

`;
export const ServicesH1 = styled.h1`
font-size:2rem;
font: 500;
color:black;
margin-bottom:30px;

@media screen and (max-width:480px)
{
    font-size: 2rem;
    margin-bottom:1.4rem;
}
`;
export const ServicesH2 = styled.h2`
    font-size:1rem;
    margin-bottom:10px;
    font-weight:bold;
`;
export const ServicesP = styled.p`
font-size:1rem;
text-align:center; 
`;
export const ServicesPh = styled.p`
font-size:1rem;
text-align:center; 
margin :1rem;
`;

export const ServicesWrapperTwo = styled.div`
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
}

@media screen and (max-width:768px)
{
    grid-template-columns:1fr;
    padding:0 20px;
}
`;
export const ServicesCardTwo = styled.div`
background:#fff;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
max-height:300px;
box-shadow: 0 3px  8px rgba(0,0,0,0.4);
transition:all 0.2 ease-in-out;
@media screen and (max-width:1200px)
{
    grid-template-columns: 1fr;
    padding:0 20px;
    max-height:800px;

}

@media screen and (max-width:480px)
{
    grid-template-columns:1fr;
    padding:0 0px;
    max-height:320px;
   
}
&:hover{
    transform:scale(1.02) ;
    transition:all 0.2 ease-in-out;
    cursor:pointer;
}
`;
export const ServicesIconTwo = styled.img`
height:300px;
width:100%;
object-fit: cover;
margin-bottom: 10px;
`;
export const ServicesH1Two = styled.h1`
font-size:2.5rem;
color:#fff;
margin-bottom:64px;

@media screen and (max-width:480px)
{
    font-size: 2rem;


}


`;
export const ServicesPTwo = styled.p`
font-size:1rem;
text-align:center;

`;
export const ServicesPhTwo = styled.p`
font-size:1rem;
text-align:center;
margin :1rem;

`;
export const ServicesH2Two = styled.h2`
    font-size:1rem;
    font-weight:bold;
    
`;





const Services = () => {
    return (
        <ServicesContainer id="works">
            <h1>WORKS</h1>
            <ServicesPh>For Clients</ServicesPh>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Mern learning app web</ServicesH2>
                    <ServicesP>A learning app with payment multi instructor modules</ServicesP>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Parasyapedia Advertisement agency</ServicesH2>
                    <ServicesP>A website using headless cms</ServicesP>

                </ServicesCard>

            </ServicesWrapper>
            <ServicesPhTwo>Reduce expenses</ServicesPhTwo>
            <ServicesWrapperTwo>

                <ServicesCardTwo>
                    <ServicesIconTwo src={Icon1} />
                    <ServicesH2Two>Reduce expenses</ServicesH2Two>
                    <ServicesPTwo>We help reduce your fees and increase your overall revenue</ServicesPTwo>

                </ServicesCardTwo>
                <ServicesCardTwo>
                    <ServicesIconTwo src={Icon2} />
                    <ServicesH2Two>Reduce expenses</ServicesH2Two>
                    <ServicesPTwo>We help reduce your fees and increase your overall revenue</ServicesPTwo>

                </ServicesCardTwo>
                <ServicesCardTwo>
                    <ServicesIconTwo src={Icon3} />
                    <ServicesH2Two>Reduce expenses</ServicesH2Two>
                    <ServicesPTwo>We help reduce your fees and increase your overall revenue</ServicesPTwo>

                </ServicesCardTwo>

            </ServicesWrapperTwo>
        </ServicesContainer>
    );
};

export default Services;
