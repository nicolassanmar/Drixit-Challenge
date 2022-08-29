import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/user-info/UserCard";
import { User } from "../model";

const fetchMyUserInfo = async (): Promise<User> => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v0/users/me`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  );
  return response.json();
};

export default function UserInfoPage() {
  const navigate = useNavigate();
  const { isLoading, data: user } = useQuery("my-user-info", fetchMyUserInfo);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // data will be defined since the Protected Route takes care of errors
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-96">
        <UserCard user={user!} />
      </div>
    </div>
  );
}
