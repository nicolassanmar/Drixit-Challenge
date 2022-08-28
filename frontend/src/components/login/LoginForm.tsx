import React, { useState } from "react";

import { LoginHeader } from "./LoginHeader";
import FormInput from "../common/FormInput";
import { AutoAnimate } from "../common/AutoAnimate";
import { useQuery } from "react-query";

const fetchIsMailValid = async (email: string): Promise<boolean> => {
  console.log("fetchIsMailValid", email);
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v0/authenticate`,
    {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    }
  );
  return res.json();
};

export default function LoginForm() {
  const email = "asd";
  const { isLoading, isError, data, error } = useQuery(
    ["isMailValid", email],
    () => fetchIsMailValid(email)
  );
  const [validEmail, setValidEmail] = useState(false);
  return (
    <div className="bg-white rounded-md max-w-md px-4 py-2 shadow-2xl flex-1">
      <AutoAnimate>
        <LoginHeader />
        <FormInput label="Email" name="email" placeholder="name@drixit.com" />
        {validEmail ? (
          <FormInput label="Password" name="password" placeholder="********" />
        ) : (
          <div className="p-10"></div>
        )}

        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setValidEmail(!validEmail)}
          >
            Log in
          </button>
        </div>
      </AutoAnimate>
    </div>
  );
}
