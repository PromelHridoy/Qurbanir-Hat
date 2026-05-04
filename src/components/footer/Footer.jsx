import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      {/* Main Section */}
      <div className="container mx-auto px-6 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Qurbani<span className="text-success">Hat</span>
          </h2>
          <p className="text-sm leading-relaxed opacity-70">
            A trusted platform for buying and selling Qurbani animals safely and easily. We ensure the best breeds for your religious devotion.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="footer-title opacity-100 font-bold mb-4 text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link className="link link-hover hover:text-success transition-colors" href="/">Home</Link></li>
            <li><Link className="link link-hover hover:text-success transition-colors" href="/animals">All Animals</Link></li>
            <li><Link className="link link-hover hover:text-success transition-colors" href="/my-profile">My Profile</Link></li>
            <li><Link className="link link-hover hover:text-success transition-colors" href="/login">Login</Link></li>
          </ul>
        </div>

        {/* Support & Contact */}
        <div>
          <h3 className="footer-title opacity-100 font-bold mb-4 text-white">Contact Info</h3>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Email: support@qurbanihat.com</li>
            <li>Phone: +880 1234 567 890</li>
            <li>Location: Cumilla, Bangladesh</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="footer-title opacity-100 font-bold mb-4 text-white">Subscribe</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-r-none focus:outline-none bg-neutral-focus text-white"
            />
            <button className="btn btn-success rounded-l-none text-white border-none">
              Join
            </button>
          </div>

          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 bg-neutral-focus rounded-full hover:bg-success hover:text-white transition-all">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 bg-neutral-focus rounded-full hover:bg-success hover:text-white transition-all">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 bg-neutral-focus rounded-full hover:bg-success hover:text-white transition-all">
              <FaYoutube size={18} />
            </a>
            <a href="#" className="p-2 bg-neutral-focus rounded-full hover:bg-success hover:text-white transition-all">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black/20 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4 opacity-60">
          <p>© 2026 QurbaniHat. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;