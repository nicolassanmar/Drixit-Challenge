import { LogoutButton } from "./LogoutButton";
import { useAtom } from "jotai";

import { jwtAtom } from "../../store";

export default function Navbar() {
  const [jwt, setJwt] = useAtom(jwtAtom);
  console.log("Navbar ", jwt);
  return (
    <div
      className="flex justify-between items-center shadow-md w-full px-4 py-2"
      style={{ backgroundColor: "#425981" }}
    >
      <img src="/drixit.svg" className="w-32 md:w-52"></img>
      {jwt && <LogoutButton onClick={() => setJwt(undefined)} />}
    </div>
  );
}
