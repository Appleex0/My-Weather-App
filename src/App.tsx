import Footer from "./components/Footer";
import Info from "./components/Info";
import Search from "./components/Search";
import IsWrong from "./components/IsWrong";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
function App() {
  const isError = useSelector((state: RootState) => state.weather.isError);
  return (
    <div className="flex flex-col justify-between items-center bg-amber-300 ">
      {isError && <IsWrong />}
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <Search />
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default App;
