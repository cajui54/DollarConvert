import { createContext, ReactNode, useEffect, useState } from "react";
import { IOutput, IChildren } from "../interfaces/IContext";

const OutputContext = createContext<IOutput>({status: false});

export const OutputContextProvider = ({children}: IChildren) => {
    const [dataOuput, setDataOutput] = useState<IOutput>({status: false, firstOutput: undefined});
    
    return ( 
    <OutputContext.Provider value={{...dataOuput, setDataOutput}}>
        {children}
    </OutputContext.Provider>
    )
}


export default OutputContext;