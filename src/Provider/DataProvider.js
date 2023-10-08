import { useContext,useState,createContext } from "react";
import data from "../data/data.json"

const Data = data;
const DataContext = createContext();

const DataProvider = ({children}) => {
    
    const [all, setall] = useState(Data);

    return(
        <DataContext.Provider value={all}>
            {children}
        </DataContext.Provider>
    );

}

export const useDataContext = () => useContext(DataContext);
export default DataProvider;