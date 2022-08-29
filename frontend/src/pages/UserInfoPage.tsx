import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useEffect } from "react";

import { jwtAtom } from "../store";
import Spinner from "../components/common/Spinner";
import UserCard from "../components/user-info/UserCard";
import { fetchMyUserInfo } from "../components/user-info/UserQueries";

export default function UserInfoPage() {
  const navigate = useNavigate();

  const [jwt, setJwt] = useAtom(jwtAtom);

  useEffect(() => {
    // if the user has no jwt stored, redirect to the login page
    if (!jwt) {
      navigate("/login");
    }
  }, []);

  const { isLoading, data } = useQuery(["my-user-info", jwt], () =>
    fetchMyUserInfo((jwt as string | undefined)!)
  );

  if (isLoading) {
    return <Spinner />;
  }

  // if there is no data or the sever responde with an error, redirect to the login page
  if (!data || "message" in data) {
    console.log("invalid jwt", jwt);
    setJwt("");
    navigate("/login");
    return <></>;
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-96">
        <UserCard user={data} />
      </div>
    </div>
  );
}
