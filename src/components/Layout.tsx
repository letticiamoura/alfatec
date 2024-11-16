import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
    children: ReactNode;
}

export default function Layout({children}: ILayoutProps) {
    return(
        <main className="w-full">
            <Header />
            {children}
            <Footer />
        </main>
    )
}