import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cards } from "./components/Cards";
import { Carousel } from "./components/Carousel";
import { Dialog } from "./components/Dialog";
import { Page } from "./components/Page";
import { Paralax } from "./components/Paralax";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Page}></Route>
        <Route path="/cards" Component={Cards}></Route>
        <Route path="/carousel" Component={Carousel}></Route>
        <Route path="/paralax" Component={Paralax}></Route>
        <Route path="/dialog" Component={Dialog}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
