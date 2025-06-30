import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <ul className="hidden md:flex flex-col sm:flex-row gap-4 sm:gap-10 font-medium text-sm sm:text-base items-center">
                <Link to='/'><li className="hover:text-fuchsia-500 transition-all duration-300 cursor-pointer">HOME</li></Link>
                <Link to='/about'><li className="hover:text-fuchsia-500 transition-all duration-300 cursor-pointer">ABOUT</li></Link>
                <Link to='/matches'><li className="hover:text-fuchsia-500 transition-all duration-300 cursor-pointer">MATCHES</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar
