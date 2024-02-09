import { createContext, ReactNode, useState } from "react";
import { IComboBox } from "../interfaces/IContext";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";


const defaultValues: IComboBox[] = [
    {currency: 'dolar', name: 'Dolar', acronym: 'US', labelInfo: 'Dolár US$:', simblo: 'US$:', svgIcon: <LiaFlagUsaSolid/>},
    {currency: 'real', name: 'Real', acronym: 'BR', labelInfo: 'Real R$:', simblo: 'R$:', svgIcon: <GiBrazilFlag/>},
]

export const ContextData = createContext<IComboBox[] | any >(defaultValues);

export const ContextDataProvider = ({children}: {children: ReactNode }) => {
    const [dataMoney] = useState<IComboBox[]>(defaultValues);
    const [firstComponent, setFirstComponent] = useState<IComboBox>(defaultValues[0]);
    const [secondComponent, setSecondComponent] = useState<IComboBox>(defaultValues[1]);
    const datasArray = [dataMoney, firstComponent, setFirstComponent, secondComponent, setSecondComponent];

    return (
        <ContextData.Provider value={datasArray}>
            {children}
        </ContextData.Provider>
    )
}