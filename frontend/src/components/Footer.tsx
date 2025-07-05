function Footer() {
    return (
        <footer className="bg-gray-100 py-8 mt-12">
            <div className="w-[90%] mx-auto flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
                <div className="mb-4 sm:mb-0">
                    &copy; {new Date().getFullYear()} MatchVERSE.in — All Rights
                    Reserved
                </div>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-purple-600">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        Terms
                    </a>
                    <a href="#" className="hover:text-purple-600">
                        Support
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
