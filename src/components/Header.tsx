import { useState, type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import Button from "./Button";

function Header({
  handleOpenModel,
  setUserData,
  userData,
}: {
  handleOpenModel: (type: "signin" | "signup") => void;
  setUserData: Dispatch<SetStateAction<any>>;
  userData: any;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="p-4 sm:p-6 flex items-center justify-between gap-4 sm:gap-0 relative bg-white shadow z-50">
      {/* Logo + Brand */}
      <Link to={"/"}>
        <div className="text-lg sm:text-xl font-bold uppercase flex items-center font-[cursive] gap-2">
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <span>Match VERSE</span>
        </div>
      </Link>

      {/* Desktop Nav + Button */}
      <div className="hidden sm:flex items-center gap-6">
        {/* Replace this with your <NavBar /> if needed */}
        <ul className="flex gap-4 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/matches">Matches</Link>
          </li>
        </ul>
        {userData ? (
          <Button
            content="Logout"
            color="pink"
            handleClick={() => {
              setUserData(undefined);
              localStorage.removeItem("userData");
            }}
          />
        ) : (
          <Button
            content="Signin"
            color="pink"
            handleClick={() => handleOpenModel("signin")}
          />
        )}
      </div>

      {/* Burger Icon for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-pink-600"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 sm:hidden z-40">
          {/* Replace with your <NavBar /> if needed */}
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/matches" onClick={() => setIsMenuOpen(false)}>
                Matches
              </Link>
            </li>
          </ul>
          {userData ? (
            <Button
              content="Logout"
              color="pink"
              handleClick={() => {
                setUserData(undefined);
                localStorage.removeItem("userData");
                setIsMenuOpen(false);
              }}
            />
          ) : (
            <Button
              content="Signin"
              color="pink"
              handleClick={() => {
                handleOpenModel("signin");
                setIsMenuOpen(false);
              }}
            />
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
