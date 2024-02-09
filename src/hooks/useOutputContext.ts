import { useContext } from "react";
import OutputContext from "../context/ContextOutputData";

const useContextOuput = () => {
    const context = useContext(OutputContext);
    if(!context) console.log('Context Output has not been found!');
    
    return context;
}

export default useContextOuput;