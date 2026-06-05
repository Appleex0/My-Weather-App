import Footer from "./components/Footer";
import Info from "./components/Info";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col justify-between items-center bg-amber-300 ">
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <Search />
        <Info />
      </div>

      <Footer />
    </div>
  );
}

export default App;
