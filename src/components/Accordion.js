import React, { useState } from 'react';
import { Data } from './Data';
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
 
`;

const Container = styled.div`
  position: absolute;
  top: 5%;
  width: 90%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  bottom: 1rem;
  background: #1c1c1c;
  margin-bottom: 2rem;
  
 
`;

const Wrap = styled.div`
background: #1c1c1c;
margin-bottom: 5px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid white;
 
  h1 {
    padding: 2rem;
    font-size: 2rem;
    justify-content: center;
    
  }
  span {
    margin-right: 1.5rem;
  }

`;

const Dropdown = styled.div`
  background: #1c1c1c;
 
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  color: white;
  
  p {
    font-size: 1.5rem;
    font-size: 18px bold;
    color: white;
  
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
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
  )
};

export default Accordion;