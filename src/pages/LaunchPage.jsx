import Logo from '../assets/logo_white_background.jpg';

const LaunchPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-10 mx-5 text-center'>
            <div className='w-4/5 sm:1/2'>
                <img src={Logo} alt="Cupids Voyages Logo" />
            </div>

            <div className="text-3xl font-semibold leading-10 tracking-tighter">
                Journey

                to

                Romance!
            </div>
            <div className="text-lg font-normal leading-10 tracking-wider">
                Big things are on the horizon!
                <br />
                Enter your details below to be the first one to grab some amazing offers on the launch day.
            </div>
            <div>

                <button
                    className="px-6 tracking-wider py-3 text-lg sm:text-2xl font-semibold text-white bg-[#d46381] rounded-full cursor-pointer"
                    onClick={() => window.location.href = 'https://vogyy0nox1n.typeform.com/to/GFkahqGV'}
                >
                    Join the waitlist
                </button>

            </div>
        </div>
    );
}

export default LaunchPage;
