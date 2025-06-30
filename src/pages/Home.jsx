import Banner from "../assets/banner.svg"
import Button from "../components/Button"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
function Home() {
    return (
        <>
            <Header />
            <div className="w-[90%] m-auto flex flex-col-reverse sm:flex-row items-center">
                {/* Text Content */}
                <div className="font-medium sm:w-[60%] sm:font-sans sm:text-4xl sm:leading-loose text-center sm:text-left">
                    <span className="block font-[cursive] sm:text-2xl mt-5">
                        Find your 💍forever, today
                    </span>
                    <span className="sm:mb-20">
                        💞Because every
                        love story deserves a
                        {/* <span className="block"></span>  */}
                        <span className="block text-purple-500 font-bold sm:text-6xl">Beautiful Beginning</span>
                    </span>
                    <div className="flex gap-4 mt-8 justify-center sm:justify-start">
                        <Button content={'Register'} />
                        <Button content={'More'} color={'pink_out'} fontColor={'violet'} />
                    </div>
                </div>

                {/* Image */}
                <div className="w-full sm:w-[40%]">
                    <img src={Banner} alt="banner-img" className="w-full h-auto object-contain" />
                </div>

            </div>

        </>
    )
}

export default Home
