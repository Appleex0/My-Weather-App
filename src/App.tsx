import Footer from "./components/Footer";
import Info from "./components/Info";
import Search from "./components/Search";
import IsWrong from "./components/IsWrong";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
function App() {
  const isError = useSelector((state: RootState) => state.weather.isError);
  return (
    <div className="flex flex-col h-screen justify-between items-center bg-amber-300 ">
      {isError && <IsWrong />}
      <div className="container flex justify-center items-center flex-col gap-30 pt-30">
        <Search />
        <Info />
      </div>
      <Footer />
    </div>
  );
}

export default App;
