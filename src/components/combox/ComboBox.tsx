import React, { useEffect, useReducer, useRef, useState } from 'react'
import * as Style from './Combox.css';
import { MdOutlineCurrencyExchange } from "react-icons/md";
import useContextDatas from '../../hooks/useContext';


const ComboBox = () => {
    const [defaultValues,
         firstComponent,
         setFirstComponent,
         secondComponent, 
         setSecondComponent] = useContextDatas();
    
    const changeElements = () => {
      if(firstComponent.currency === 'dolar') {

        setFirstComponent({...defaultValues[1]});
        setSecondComponent({...defaultValues[0]});

      } else {
        setFirstComponent({...defaultValues[0]});
        setSecondComponent({...defaultValues[1]});       
      }
    }

    const handleClick = () => {
      changeElements();
    }

  return (
    <Style.mainCombox>
      <Style.ContainerCurrency>
        <img src={`https://flagsapi.com/${firstComponent.acronym}/flat/64.png`}/>
         <p>{firstComponent.name}</p>
      </Style.ContainerCurrency> 

        <button onClick={handleClick}>
            <MdOutlineCurrencyExchange />
        </button>

      <Style.ContainerCurrency>
        <img src={`https://flagsapi.com/${secondComponent.acronym}/flat/64.png`}/>
        <p>{secondComponent.name}</p>
      </Style.ContainerCurrency>

    </Style.mainCombox>
  )
}

export default ComboBox
