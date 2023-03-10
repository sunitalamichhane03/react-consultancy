import React, { useState } from 'react';
import { Data1 }  from '../Data1'
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background-color: white;
  margin-bottom:40rem;
  
 
 
`;

const Container = styled.div`
  position: absolute;
  top: -10%;
  width: 70%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  bottom: 1rem;
  background: #1c1c1c;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  margin-bottom: 7rem;

  
`;

const Wrap = styled.div`
background: #D3D3D3;
margin-bottom: 5px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
 
  h1 {

    padding: 2rem;
    font-size: 2rem;
    justify-content: center;
    color: black;
    
  }
  span {
    margin-right: 1.5rem;
    color: black;

  }

`;

const Dropdown = styled.div`
  background: lightgrey;
 
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  color: black;
  
  p {
    font-size: 1.5rem;
    font-size: 18px bold;
    color: black;
    height: 140px;
    padding: 1rem;
  }
`;
const Question = () => {
 
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
      if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
      }
  
      setClicked(index);
    };
  


  return (
    <IconContext.Provider value={{ color: 'black', size: '30px' }}>
    <AccordionSection>
      <Container>
        {Data1.map((item, index) => {
          return (
            <>
              <Wrap onClick={() => toggle(index)} key={index}>
                <h1>{item.question}</h1>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.answer}</p>
                </Dropdown>
              ) : null}
            </>
          );
        })}
      </Container>
    </AccordionSection>
  </IconContext.Provider>
);
  
}
export default Question