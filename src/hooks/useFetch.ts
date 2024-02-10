import { useEffect, useState } from 'react'

const useFetch = () => {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL';
    const [datasMoney, setDataMoney] = useState<{} | null>(null);
    const [callFetch, setCallFetch] = useState(true);
    const weekDay = new Date();
  
    
    useEffect(() => {
        const requestDatas = async () => {
            try {
                const response = await fetch(url);

                const datasJSON = await response.json();

                setDataMoney(datasJSON);
            } catch(error) {
                alert(` - Ocorreu um error inesperado! \n - ${error}`);

            } finally {
                setCallFetch(false);
            }
        }

        callFetch && requestDatas();
        console.log('render useFetch');
        
    }, [callFetch]);
    
    if(weekDay.getDay() !== 6 && weekDay.getDay() !== 7) {
        setTimeout(() => {
            setCallFetch(true);
            console.log('render useFetch');
        }, 3000);
    }
  
  return {
    currency: datasMoney,
    callFetch,
    setCallFetch,
    };
}

export default useFetch
