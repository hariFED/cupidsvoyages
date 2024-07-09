
const Homepage = () => {
    return (
        <>
            <div className="flex relative flex-col sm:flex-row justify-evenly h-[75vh]  items-center">
                <div className="flex flex-col gap-2 text-4xl font-bold text-center sm:text-left sm:gap-5 sm:text-6xl ">
                    <h1 className="text-white">
                        Your Journey to
                    </h1>
                    <h1 className=" sm:text-9xl text-6xl text-[#FD51EC]">
                        Love
                    </h1>
                    <h1 className="text-white">
                        Starts Here...
                    </h1>
                </div>

                <div>
                    <div className="flex flex-col items-center justify-around gap-10">
                        <div className="font-light text-center text-white sm:text-left text-wrap">
                            Discover handpicked romantic
                            <br />destinations and tailored experiences for couples.
                            <br />Let us plan your unforgettable getaway.
                        </div>
                        <div className="text-[#FD51EC]  border-2 cursor-pointer border-gray-300 hover:border-t-black hover:border-l-black hover:border-r-pink-400 hover:border-b-pink-400 text-center font-semibold w-1/2 py-2 px-6 rounded-full bg-white hover:bg-white hover:text-black">
                            Plan it today!
                        </div>
                    </div>
                </div>

                <div className=" absolute bottom-[-20px]">
                    <div className="arrow ">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className=" absolute bottom-[-60px]">
                    <p className="font-mono font-normal bottom-12">Swipe up to look more about us </p>
                </div>

            </div>
        </>
    )
}

export default Homepage