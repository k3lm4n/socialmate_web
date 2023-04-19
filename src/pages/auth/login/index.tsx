"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/AuthContext";
import { api } from "../../../api/api";
import { isError, useMutation } from "react-query";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Login } from "@/utils/types/types";
import Loading from "@/components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const {isLoading,data,error} = useQuery('getUser',api.getUsers)

  //     console.log(isLoading,data,error)

  const { mutateAsync, mutate, isLoading, isError, status } = useMutation(
    ({ email, password }: { email: string; password: string }) =>
      api.authUser({ email, password }),
    {
      onSuccess: () => {
        context.setAuth(true);
        router.push("/dashboard");
      },
    }
  );

  const { register, handleSubmit } = useForm<Login>({});

  const router = useRouter();
  const context = useContext(AuthContext);

  const onSubmit: SubmitHandler<Login> = async (data) => {
    console.log(data);
    await mutateAsync(data);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Image
        src={"/background.jpg"}
        alt="Background Image"
        fill
        className="blur-sm"
      />
      <div className="w-full h-screen bg-grey-300">
        <div className="w-full h-screen  flex content-center  justify-center items-center">
          <div className="flex items-center justify-center w-[460px] h-[650px]  backdrop-blur-lg rounded-xl bg-white/30">
            <div className="w-[380px] h-[550px] px-16 flex items-center flex-col bg-white rounded-xl shadow-2xl z-30 backdrop-blur-lg">
              <h3 className="text-3xl font-bold text-grey-900 m-3 mt-10 ">
                Iniciar a sessão
              </h3>
              <button className="border-[0.7px] w-full py-2 rounded-md my-3 border-[#d2d2d2] hover:bg-[#EA4335] hover:text-white hover:transition-all duration-300 ease-in-out">
                Continuar com o Google
              </button>
              <div className="w-full flex flex-row my-4 ">
                <div className="flex w-full h-[1px] bg-[#d2d2d2] my-4 " />
                <p className="px-2">Ou</p>
                <div className="flex w-full h-[1px] bg-[#d2d2d2] my-4 " />
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-full text-grey-900 "
              >
                <div className="flex flex-col">
                  <div className="flex flex-col  mb-4">
                    <label className="mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="border-[0.7px] border-[#d2d2d2] p-1 rounded-md"
                      type="email"
                      {...register("email")}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col  mb-4">
                    <label className="mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="border-[0.7px] border-[#d2d2d2] p-1 rounded-md"
                      type="password"
                      {...register("password")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-center py-2 my-3  rounded-md  bg-grey-500 text-sm font-regular hover:bg-grey-600 hover:text-white hover:transition-all duration-300 ease-in-out"
                >
                  <Link href={"/auth/login"}>Iniciar Sessão</Link>
                </button>
                <p className=" text-sm my-2 text-center font-regular">
                  Não tem uma conta?{" "}
                  <b className="text-blue-400">
                    <Link href={"/auth/signup"}>Registra-se</Link>
                  </b>
                </p>
              </form>
              {isError && <p></p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
