import Logo from '../assets/white_logo_transparent_background.png'

const Navbar = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-around pt-5'>
                <div className=''>
                    <img src={Logo} alt="Logo" className='w-44 sm:w-52' />
                </div>
                <div className='items-center hidden gap-48 font-medium text-white cursor-default sm:flex'>
                    <div className='hover:underline hover:underline-offset-8'>Destinations</div>
                    <div className='hover:underline hover:underline-offset-8'>Why us?</div>
                    <div className='hover:underline hover:underline-offset-8'>Contact</div>
                </div>
                <div>
                    <div className='bg-[#FD51EC] text-sm border-2 cursor-pointer border-gray-300 hover:border-t-black hover:border-l-black hover:border-r-pink-400 hover:border-b-pink-400 py-2 px-6 rounded-full text-white hover:bg-white hover:text-black'>
                        Get in touch
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar