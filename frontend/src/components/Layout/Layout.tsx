import { Outlet } from "react-router"
import Header from "../Header/Header.tsx"
import Footer from "../Footer/Footer.tsx"


type LayoutProps = {
  isLoggedIn: boolean,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
const Layout = ({isLoggedIn, setIsLoggedIn}: LayoutProps) => {
  
  return (
    <div className='flex flex-col min-h-screen'>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className="flex-grow bg-white py-8 px-4">
            <Outlet/>
        </main>
      <Footer />
    </div>
  )
}

export default Layout