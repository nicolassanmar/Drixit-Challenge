import React, { useState } from "react";

import { LoginHeader } from "./LoginHeader";
import FormInput from "../common/FormInput";
import { AutoAnimate } from "../common/AutoAnimate";
import { useQuery } from "react-query";
import { fetchIsMailValid, login } from "./LoginQueries";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // validate mail query
  const {
    isLoading: isLoadingEmail,
    data,
    refetch: refetchEmail,
  } = useQuery(["isMailValid", email], () => fetchIsMailValid(email), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  // login query
  const {
    isLoading: isLoadingLogin,
    data: dataLogin,
    isError,
    refetch: refetchLogin,
  } = useQuery(["isMailValid", email, password], () => login(email, password), {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const validEmail = data || false;

  // on succesfull request, navigate to user-info
  const navigate = useNavigate();
  const onLogin = () => {
    refetchLogin().then(({ data }) => {
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        navigate("/user-info");
      }
    });
  };
  return (
    <form className="bg-white rounded-md max-w-md px-4 py-2 shadow-2xl flex-1">
      <AutoAnimate>
        <LoginHeader />
        <FormInput
          label="Email"
          name="email"
          placeholder="name@drixit.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => refetchEmail()}
          warn={!validEmail && data != undefined}
          validated={validEmail}
        />
        {validEmail ? (
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            warn={dataLogin?.statusCode === 401}
          />
        ) : (
          <div className="p-10"></div>
        )}

        <div className="flex justify-center mt-4">
          <LoginButton
            state={validEmail ? "submit" : "next"}
            onSubmit={() => onLogin()}
            onNext={() => refetchEmail()}
            disabled={validEmail && password.length == 0}
            isLoading={isLoadingEmail || isLoadingLogin}
          />
        </div>
      </AutoAnimate>
    </form>
  );
}
