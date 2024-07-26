import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Banner from "./components/Banner";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto mb-8 p-4">
          <Searchbar />
        </div>
        <div className="max-w-6xl mx-auto mb-8 p-4">
          <Banner />
        </div>
        <div className="max-w-6xl mx-auto mb-8 p-4">
          <Products />
        </div>
      </div>
    </>
  );
}

export default App;
