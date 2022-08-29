import { ApiError, User } from "../../model";

export const fetchMyUserInfo = async (
  jwt: string
): Promise<User | ApiError> => {
  console.log("fetching user info ", jwt);
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v0/users/me`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
  return response.json();
};
