import React, { useState } from "react";

const LogContext=React.createContext({
    token:'',
    isLogIn:false,
    login:(token)=>{},
   
});

export const LogContextprovider=(props)=>{
    const [token,setToken]=useState(null)

    const userIsLogIn= !!token;

    const loginHandler=(token)=>{
        setToken(token);
    };

    const logoutHandler=()=>{
        setToken(null);
        
    };

    const contextValue={
        token:token,
        isLogIn:userIsLogIn,
        login:loginHandler,
        logout:logoutHandler
    }

    return (
        <LogContext.Provider value={contextValue}>{props.children}</LogContext.Provider>
    );
};

export default LogContext;