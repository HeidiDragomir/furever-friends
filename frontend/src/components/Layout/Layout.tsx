import { Outlet } from "react-router"
import Header from "../Header/Header.tsx"
import Footer from "../Footer/Footer.tsx"

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
        <main className="flex-grow bg-white py-8 px-4">
            <Outlet/>
        </main>
      <Footer />
    </div>
  )
}

export default Layout