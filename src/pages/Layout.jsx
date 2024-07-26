import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Layout({ children }) {
  return (
    <div className="bg-[#f0f9fb] min-h-screen">
      <Navbar />
      <div className="container mx-auto max-w-xs md:max-w-lg lg:max-w-2xl pt-0 pb-10 sm:py-12 ">{children}</div>
      <Footer />
    </div>
  );
}
