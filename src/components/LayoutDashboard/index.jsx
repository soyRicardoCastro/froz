import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function LayoutDashboard({ children }) {
  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="flex-1 bg-slate-700 h-full">
        <Navbar />
        <div className="mt-24 mb-16">{children}</div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
