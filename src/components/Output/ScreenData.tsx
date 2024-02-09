import {useRef} from 'react'
import * as Style from './ScreenData.css';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";
import useContextOuput from '../../hooks/useOutputContext';

const ScreenData = ({refElement}: any) => {
  const output = useContextOuput();
  
  //console.log(test.current!.getBoundingClientRect().y);

  return (
    <div ref={refElement}>
      { output.status && (<Style.MainScreen>
          <h2>Resultado:</h2 >
          <button title='fechar' onClick={() => output.setDataOutput({status: false})}>
            <FaRegWindowClose />

          </button>

          <Style.ResultContainer>

              <Style.ItemResult>
                  <p>{output.label}</p>
                  <p>{output.firstOutput}</p> 
                  <img src={`https://flagsapi.com/${output.firstFlag}/flat/64.png`}/>
              </Style.ItemResult>

              <FaMoneyBillTransfer />

              <Style.ItemResult>
                  <p>{output.secoundLabel}</p>
                  <p>{output.secoundOutput}</p>
                  <img src={`https://flagsapi.com/${output.secoundFlag}/flat/64.png`}/>
              </Style.ItemResult>

          </Style.ResultContainer>

      </Style.MainScreen>)}
    </div>
  )
}

export default ScreenData
