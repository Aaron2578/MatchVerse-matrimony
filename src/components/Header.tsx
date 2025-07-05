import type { Dispatch, SetStateAction } from "react";
import Logo from "../assets/logo.png";
import Button from "./Button";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
function Header({
  handleOpenModel,
  setUserData,
  userData,
}: {
  handleOpenModel: (type: "signin" | "signup") => void;
  setUserData: Dispatch<SetStateAction<any>>;
  userData: any;
}) {
  return (
    <header className="p-4 sm:p-6 flex items-center justify-between gap-4 sm:gap-0">
      <Link to={"/"}>
        <div className="text-lg sm:text-xl font-bold uppercase flex items-center font-[cursive] gap-2">
          <span>
            <img src={Logo} alt="logo" className="w-10 h-10" />
          </span>
          <span>Match VERSE</span>
        </div>
      </Link>
      <NavBar />
      {userData ? (
        <Button
          content={"Logout"}
          color={"pink"}
          handleClick={() => {
            setUserData(undefined);
            localStorage.removeItem("userData");
          }}
        />
      ) : (
        <Button
          content={"Signin"}
          color={"pink"}
          handleClick={() => handleOpenModel("signin")}
        />
      )}
    </header>
  );
}

export default Header;
