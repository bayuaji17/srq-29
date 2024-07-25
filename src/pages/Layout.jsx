import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Layout({ children }) {
  return (
    <div className="bg-[#f0f9fb]">
      <Navbar />
      <div className="container mx-auto max-w-2xl py-12 ">{children}</div>
      <Footer />
    </div>
  );
}
