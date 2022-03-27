import { memo } from "react";
import Header from "./Header";

export const Layout = memo(({children}) => {
    return (
        <>
        <Header />
        <main>
            {children}
        </main>
        </>
    );
});

export default Layout;