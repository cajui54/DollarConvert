import React, { useRef, MutableRefObject } from 'react';
import Form from './components/Form/Form';
import ComboBox from './components/combox/ComboBox';
import *  as Style from './App.css';
import ScreenData from './components/Output/ScreenData';
import useContextOuput from './hooks/useOutputContext';

function App() {
  const dataOuput = useContextOuput();
  const refElement = useRef<HTMLDivElement>(null);
  return (
      <Style.mainApp>
        <main>
          <ComboBox/>
          <Form refElement={refElement}/>
          <ScreenData refElement={refElement}/>
        </main>
      </Style.mainApp>
  );
}

export default App;
