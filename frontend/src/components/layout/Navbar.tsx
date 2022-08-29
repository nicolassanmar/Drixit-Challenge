import { useEffect, useState } from "react";
import { LogoutButton } from "./LogoutButton";
export default function Navbar() {
  // TODO: Use a state manager to refactor this, such as Redux or Jotai.
  // if there is a jwt in localstorage show logout button
  const [jwt, setJwt] = useState<string | null>();
  useEffect(() => {
    setJwt(localStorage.getItem("jwt"));
    console.log(jwt);
  }, []);

  return (
    <div
      className="flex justify-between items-center shadow-md w-full px-4 py-2"
      style={{ backgroundColor: "#425981" }}
    >
      <img src="/drixit.svg" className="w-32 md:w-52"></img>
      {jwt && <LogoutButton onClick={() => setJwt(null)} />}
    </div>
  );
}
