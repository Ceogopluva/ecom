import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 w-full min-h-screen relative">
      <Navbar />

      <div className="max-w-6xl mx-auto mb-8 sticky top-0 z-50">
        <Searchbar />
      </div>

      {children}
    </div>
  );
}
