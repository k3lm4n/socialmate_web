"use client";
import React, { PropsWithChildren, useState } from "react";

type IContext = {
  acesstoken: string;
  setAuth: (value: boolean) => void;
};
export const AuthContext = React.createContext({} as IContext);
const AuthProvider = (props: PropsWithChildren) => {
  const [acesstoken, setAcesstoken] = useState("");
  const setAuth = (value: boolean) => {
    if (value) {
    } else {
      setAcesstoken("");
    }
  };

  return (
    <AuthContext.Provider value={{ acesstoken, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
