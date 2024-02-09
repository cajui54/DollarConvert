import { useContext } from "react";
import { ContextData } from "../context/ContextData";

const useContextDatas = () => {
    const context = useContext(ContextData);

    return context;
}

export default useContextDatas;