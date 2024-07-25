import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Banner from "./components/Banner";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen">
        <Navbar />
        <div className="mt-4 p-6">
          <Searchbar />
        </div>
        <div className="max-w-7xl p-6">
          <Banner />
        </div>
        <div className="mt-7">
          <Products />
        </div>
      </div>
    </>
  );
}

export default App;
