import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AutoAnimate } from "../common/AutoAnimate";

export default function Layout() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-cyan-700 to-pink-700 flex flex-col">
      <Navbar />
      <div className="flex-1 flex-col justify-center items-center p-4">
        <Outlet />
      </div>
    </div>
  );
}
