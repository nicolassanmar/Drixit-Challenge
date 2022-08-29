import { useNavigate } from "react-router-dom";

import { useAtom } from "jotai";
import { jwtAtom } from "../../store";

interface Props {
  onClick: () => void;
}

export function LogoutButton(props: Props) {
  const navigate = useNavigate();
  const [jwt, setJwt] = useAtom(jwtAtom);

  const deleteJWT = () => {
    props.onClick();
    setJwt(undefined);
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
