import { useNavigate } from "react-router-dom";

interface Props {
  onClick: () => void;
}
export function LogoutButton(props: Props) {
  const navigate = useNavigate();
  const deleteJWT = () => {
    props.onClick();
    localStorage.removeItem("jwt");
    navigate("/login");
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => deleteJWT()}
    >
      Logout
    </button>
  );
}
