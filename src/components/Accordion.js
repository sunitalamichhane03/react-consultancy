import React from 'react'
import { Data } from './Data'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus} from  'react-icons/fi'
    
const AccordionSection = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center; 
 position: relative;
height: 10rem;
margin-top:3rem;
`;
const Accordion = () => {
  return (
   <IconContext.Provider value={{color:'#00ffb9', size: '25px'}}>
<AccordionSection>

<container>
    {Data.map((item, index)=>{
      return(
        <>
        <wrap>
        <h1>{item.question}</h1>
        </wrap>
        <p>{item.answer1}</p>
        <p>{item.answer2}</p>
        <p>{item.answer3}</p>
        </>
      )  
    })}
</container>
</AccordionSection>
   </IconContext.Provider>
  )
}

export default Accordion