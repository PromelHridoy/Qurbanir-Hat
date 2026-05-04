
import Footer from "@/components/footer/Footer";
import QurbaniTips from "@/components/homepage/QurbaniTips";
import Navbar from "@/components/shared/Navbar";


const MainLayout = ({ children }) => {
    return (
       <>
     
        <Navbar />
        
        {children}

        <QurbaniTips/>
        

        <Footer/>
       </>
    );
};

export default MainLayout;