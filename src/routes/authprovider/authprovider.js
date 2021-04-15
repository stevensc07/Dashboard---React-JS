import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [edit,setEdit] = useState({});
    return (            
            <AppContext.Provider value={[edit,setEdit]}>
                {children}
            </AppContext.Provider>  
    );
}

export const AppContext = createContext();