import { FormEvent,  useEffect, useRef, useState } from 'react';
import * as Style from './Form.css';
import useContextDatas from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';
import { formatCurrencyBR, formatCurrencyUSA } from '../utils/CurrencyForm';
import useContextOuput from '../../hooks/useOutputContext';

const Form = ({refElement}: {refElement: HTMLDivElement | null} | any) => {
  const datas = useContextDatas();
  const outputDatas = useContextOuput();
  const datasFetch = useFetch();
  
  let refTest = useRef<HTMLDivElement>(null);
  let inputFirst = useRef<HTMLInputElement>(null);
  let inputSecound = useRef<HTMLInputElement>(null);
  let [initialeValues, setInitialeValue] = useState<string[]>(['4.99', '1.00']);
  let [callElement, setCallElement] = useState<boolean>();


  const handleResetClick = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    outputDatas.setDataOutput({status: false});
  }
  const convertNumberToInteger = (...numbers: string[]): number[] => {
    return numbers.map((number) => parseFloat(number));
  }

  const calculateValueTotal = (value1: string, value2: string, value3: string): number => {
    const [firstValue, secoundValue, thirdValue] = convertNumberToInteger(value1, value2, value3);
      
    if(datas[1].currency === 'real') {
      return firstValue / thirdValue;
    } else {
      return firstValue * secoundValue;
    }
  }
  const checkInputEmpty = (firstValue: string, secoundValue: string): boolean => {
    if(firstValue && secoundValue) return true;
    return false;
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const valueTotal = calculateValueTotal(inputFirst.current!.value, inputSecound.current!.value, initialeValues[0]);
    let outputData = {};
    if(checkInputEmpty(inputFirst.current!.value, inputSecound.current!.value)) {
      if(datas[1].currency === 'real') {
        outputData = {
          status: true,
          firstOutput: formatCurrencyBR.format(parseFloat(inputFirst.current!.value)),
          secoundOutput: formatCurrencyUSA.format(valueTotal),
          firstFlag: 'BR',
          secoundFlag: 'US',
          label: 'Real',
          secoundLabel: 'Dolar',
        }
      } else {
        outputData = {
          status: true,
          firstOutput: formatCurrencyUSA.format(parseFloat(inputFirst.current!.value)),
          secoundOutput: formatCurrencyBR.format(valueTotal),
          firstFlag: 'US',
          secoundFlag: 'BR',
          label: 'Dolar',
          secoundLabel: 'Real',
        } 
      }
      setCallElement(true);
      outputDatas.setDataOutput(outputData);
    } else {
      alert('Por favor, preencha todo os campos!')
    }
    
  }

  useEffect(() => {
    const requestFetch = async () => {

      if(datasFetch.currency) {
        const {USDBRL}: any =  datasFetch.currency;
        const {ask} = await USDBRL;
        
        setInitialeValue([ask, '1.00']);
      }
    }
    requestFetch();
    
  }, [datasFetch.currency]);

  useEffect(() => {
    if(datas[1].currency === 'real') {
      inputFirst.current!.value = parseFloat(initialeValues[0]).toFixed(2);
      inputSecound.current!.value = initialeValues[1];
    } else {
      inputFirst.current!.value = initialeValues[1];
      inputSecound.current!.value = parseFloat(initialeValues[0]).toFixed(2);
    }
    
  }, [datas[1], datasFetch.currency]);

  useEffect(() => {
    const scrollPage = () => {
      refElement.current && refElement.current.scrollIntoView({
        behavior: 'smooth'
      });
      setCallElement(false);
    }
    callElement && scrollPage();
  }, [callElement]);
  
  return (
    <Style.MainForm>
        <h2>
          Conversor de Moedas
        </h2>
        <Style.Form onSubmit={handleSubmit}>
          <label >
            <p>{datas[1].labelInfo}</p> 
            <p>{datas[1].simblo}</p>
            <input type="number"
             step='any'
             min='1'
             required
             ref={inputFirst}
             />
             {datas[1].svgIcon}
          </label>

          <label>
            <p>{datas[3].labelInfo}</p>
            <p>{datas[3].simblo}</p>
            <input
              type="number"
              step='any'
              min='1'
              required
              readOnly
              ref={inputSecound}
            /> 
            {datas[3].svgIcon}        
          </label>

          <Style.ButtonsContainer ref={refTest}>
            <button>Confirmar</button>
            <button type='reset' onClick={handleResetClick}>Cancelar</button>
          </Style.ButtonsContainer>
        </Style.Form>
    </Style.MainForm>
  )
}

export default Form
