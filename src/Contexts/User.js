import React, { createContext, useState } from 'react';

const UserContext = createContext({
    user: {phone : null, token : null, nick : null},
    dispatch: () => {},
});

const UserProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const dispatch = ({phone, token, nick}) => {
        setUser({ phone, token, nick });
    }
    const value = {user, dispatch};
    return <UserContext.Provider value={ value }>{ children }</UserContext.Provider>;
}

export { UserContext, UserProvider };