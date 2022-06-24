import { createContext, useState } from "react";


export const Context = createContext(null) 
    const UserProvider = ({children}) => {
        const [text, setText] = useState('Maxi')


        return (
            <Context.Provider value={{text, setText}}>
                {children}
            </Context.Provider>
        )
    }

export default UserProvider