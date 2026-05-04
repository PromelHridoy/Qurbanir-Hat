import Footer from "@/components/footer/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            
            <Toaster position="top-center" />

            <Navbar />
            
            <main className="flex-grow">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;