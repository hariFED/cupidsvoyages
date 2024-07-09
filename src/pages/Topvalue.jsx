import collage from '../assets/FotoJet.png'


const Topvalue = () => {
    return (
        <div className=" px-24 pt-16  flex gap-20 ">
            <div className="w-1/2">
                <div className="flex flex-col gap-5">
                    <div className="font-semibold text-lg text-[#33333]">Top Value</div>
                    <div className=" text-6xl font-semibold text-[#ff8af3]">
                        The perfect partner
                        <br />for your trip
                    </div>
                    <div className="  text-lg font-medium text-justify text-[#333333]">
                        At Cupid Voyages, we prioritize creating exceptional and personalized experiences for every couple. Our commitment to quality and attention to detail ensure that your romantic getaway is truly unforgettable.
                    </div>
                </div>

                <div className="mt-10">
                    <div className=" text-base text-[#544a4a] gap-x-10 gap-y-10 grid grid-flow-col grid-cols-2  grid-rows-2">
                        <div className="flex   p-10 items-center text-justify  bg-white rounded-2xl shadow-lg drop-shadow-xl shadow-[#ffe5fc]">
                            <div className="flex-shrink-0 ">
                                {/* add a svg */}
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h2 className="text-xl font-semibold">Personalized Tour Guide</h2>
                                <p className="text-gray-400 font-medium">Enjoy a custom-tailored itinerary that matches your interests and preferences. Our expert guides ensure every moment of your trip is unique and memorable.</p>
                            </div>
                        </div>
                        <div className=" p-10  flex items-center text-justify bg-white rounded-2xl shadow-xl shadow-[#ffe5fc]">
                            <div className="flex-shrink-0 ">
                                {/* add a svg */}
                            </div>
                            <div className="flex flex-col col-start-2 col-end-3 gap-3">
                                <h2 className="text-xl font-semibold">Intimate Experiences</h2>
                                <p className="text-gray-400 font-medium">Indulge in activities designed just for couples, such as private picnics, scenic hikes, and local cultural tours, creating unforgettable memories together.</p>
                            </div>
                        </div>
                        <div className=" p-10  flex items-center text-justify bg-white rounded-2xl shadow-xl shadow-[#ffe5fc]">
                            <div className="flex-shrink-0 ">
                                {/* add a svg */}

                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-semibold">Charming Accommodations</h2>
                                <p className="text-gray-400 font-medium">Stay in carefully selected accommodations that provide a cozy and romantic atmosphere, whether it&apos;s a quaint beachside cottage or a charming mountain cabin.</p>
                            </div>
                        </div>
                        <div className=" p-10  flex items-center text-justify bg-white rounded-2xl shadow-xl shadow-[#ffe5fc]">
                            <div className="flex-shrink-0 ">
                                {/* add a svg */}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className="text-xl font-semibold">Seamless Planning</h2>
                                <p className="text-gray-400 font-medium">Relax and let us handle all the details, from transportation to special requests. Our dedicated team ensures a smooth and stress-free travel experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2  flex items-center justify-center">
                <div className="">
                    <div>
                        <img src={collage} alt="" className=' rounded-lg p-20' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Topvalue