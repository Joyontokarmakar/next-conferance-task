import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Sponsor from "@/components/Sponsor";
import Header from "@/components/Header";

const Layout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;