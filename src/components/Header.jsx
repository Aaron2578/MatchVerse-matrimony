import "../App.css"
import Logo from "../assets/logo.png"
import Button from "./Button"
import NavBar from "./NavBar"
function Header() {
    return (
        <header className="p-4 sm:p-6 flex items-center justify-between gap-4 sm:gap-0">
            <div className="text-lg sm:text-xl font-bold uppercase flex items-center font-[cursive] gap-2">
                <span>
                    <img src={Logo} alt="logo" className="w-10 h-10" />
                </span>
                <span>Match VERSE</span>
            </div>
            <NavBar />
            <Button content={'Signin'} color={'pink'} />
        </header>
    )
}

export default Header
