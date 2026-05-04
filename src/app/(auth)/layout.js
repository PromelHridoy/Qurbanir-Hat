import Footer from "@/components/footer/Footer";
import Navbar from "@/components/shared/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div >
      <Navbar />

      <div className="min-h-[90vh] flex items-center justify-center bg-slate-100">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default AuthLayout;