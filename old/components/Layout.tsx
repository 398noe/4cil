import { memo } from "react";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = memo(function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
});

export default Layout;