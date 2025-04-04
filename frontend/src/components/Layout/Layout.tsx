import { Outlet } from "react-router"
import Footer from "../Footer/Footer.tsx"
import Header from "../Header/Header.tsx"

const Layout = () => {
  return (
    <>
      <Header />
        <main>
            <Outlet/>
        </main>
      <Footer />
    </>
  )
}

export default Layout