"use client";
import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "../../../api/api";
import { Toast } from "react-toastify/dist/components";
import Image from "next/image";
import { Signup } from "@/utils/types/types";
import { AuthContext } from "@/context/AuthContext";
import Loading from "@/components/Loading";

const SignUp = () => {
  const { mutateAsync, isLoading, isError, status } = useMutation(
    (data: Signup) => api.createUser(data)
  );
  const { register, handleSubmit } = useForm<Signup>({});

  const router = useRouter();
  const context = useContext(AuthContext);

  const onSubmit: SubmitHandler<Signup> = (data) => {
    console.log(data);
    mutateAsync(data);

    const redirect = () => {
      router.push("/dashboard");
      return true;
    };
    if (!isLoading && status === "success") {
      context.setAuth(true);
      router.push("/dashboard");
    }
  };



  return (
    <>
      {isLoading && <Loading/>}

      <Image
        src={"/background.jpg"}
        alt="Background Image"
        fill
        className="blur-sm"
      />
      <div className="w-full bg-grey-300 h-screen">
        <div className="w-full h-screen  flex content-center  justify-center items-center">
          <div className="flex items-center justify-center lg:w-[460px] lg:h-[780px] backdrop-blur-xl rounded-lg bg-white/30">
            <div className="lg:w-[380px] lg:h-[700px] px-16 pb-10 lg:pb-0 flex items-center flex-col bg-white rounded-xl shadow-2xl z-30 ">
              <h3 className="font-bold text-3xl text-grey-900 m-3 mt-10 ">
                Criar uma conta
              </h3>
              <button className="border-[0.7px] w-full py-2 rounded-md my-3 border-grey-200 bg-white  hover:bg-[#EA4335] hover:text-white hover:transition-all duration-300 ease-in-out">
                Crie conta com o Google
              </button>
              <div className="w-full flex flex-row my-4 ">
                <div className="flex w-full h-[1px] bg-grey-border-grey-200 bg-white my-4 " />
                <p className="px-2">Ou</p>
                <div className="flex w-full h-[1px] bg-grey-border-grey-200 bg-white my-4 " />
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-full text-grey-900 "
              >
                <div className="flex flex-col">
                  <div className="flex flex-col my-4">
                    <label className="mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-[0.7px] border-grey-200 bg-white p-1 rounded-md"
                      {...register("name")}
                    />
                  </div>
                  <div className="flex flex-col  mb-4">
                    <label className="mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="border-[0.7px] border-grey-200 bg-white p-1 rounded-md"
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
                      className="border-[0.7px] border-grey-200 bg-white p-1 rounded-md "
                      type="password"
                      {...register("password")}
                    />
                  </div>
                  <div className="flex flex-col  mb-4">
                    <label className="mb-2" htmlFor="password">
                      Confirme a sua Password
                    </label>
                    <input
                      className="border-[0.7px] border-grey-200 bg-white p-1 rounded-md"
                      type="password"
                      {...register("passwordConfirmation")}
                    />
                  </div>
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full text-center py-2 my-3  rounded-md  bg-grey-500 hover:bg-grey-600 text-white hover:transition-all duration-300 ease-in-out"
                >
                  Criar conta
                </button>
                <p className=" text-sm my-2 text-center font-regular">
                  Já tem uma conta?{" "}
                  <b className="text-blue-400">
                    <Link href={"/auth/login"}>Entrar</Link>
                  </b>
                </p>
              </form>
              {isError && <p>Erro na Criaçāo de conta</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
