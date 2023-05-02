"use client";
import React, { PropsWithChildren, useState } from "react";

type IContext = {
  acesstoken: string;
  setAuth: (value: boolean) => void;
  isAuth: boolean;
};
export const AuthContext = React.createContext({} as IContext);
const AuthProvider = (props: PropsWithChildren) => {
  const [acesstoken, setAcesstoken] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const setAuth = (value: boolean) => {
    if (value) {
      setAcesstoken("123");
      setIsAuth(true);
    } else {
      setAcesstoken("");
      setIsAuth(false);
    }
  };

  return (
    <AuthContext.Provider value={{ acesstoken, setAuth, isAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
