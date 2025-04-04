import { Outlet } from "react-router"
import Footer from "./Footer.tsx"
import Header from "./Header.tsx"

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