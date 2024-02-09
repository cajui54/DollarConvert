import { ReactNode, ReactElement} from "react";
import { IconType } from "react-icons";
export interface IComboBox {
    currency: 'real' | 'dolar',
    name:   'Real' | 'Dolar' | '',
    acronym: 'BR' | 'US',
    labelInfo: 'Real R$:' | 'Dolár US$:' ,
    simblo: 'US$:' | 'R$:' ,
    svgIcon: ReactElement<IconType>,
}

export interface IOutput {
    status: boolean,
    firstOutput?: string | number,
    secoundOutput?: string | number,
    firstFlag?: 'BR' | 'US',
    secoundFlag?: 'BR' | 'US',
    label?: 'Dolar' | 'Real',
    secoundLabel?:'Dolar' | 'Real',
    setDataOutput?: any,
}

export interface IChildren {
    children: ReactNode
}