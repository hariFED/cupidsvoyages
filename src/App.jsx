import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Topvalue from './pages/Topvalue'
import LaunchPage from './pages/LaunchPage'

function App() {

  return (
    <>
      {/* <div className='h-[100vh]  bg-[url("./assets/bghomepage.jpg")] bg-cover bg-no-repeat'>
        <Navbar />
        <Homepage />


      </div>
      <div className='bg-[#F5F5F5] h-screen'>
        <Topvalue />
      </div>  */}
      <div className='font-poppins'>
        <LaunchPage />
      </div>
    </>
  )
}

export default App
