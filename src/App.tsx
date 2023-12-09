import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cards } from "./components/Cards";
import { Carousel } from "./components/Carousel";
import { Layouts } from "./components/Layouts";
import { Page } from "./components/Page";
import { WorkflowApp } from "./components/WorkflowApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Page}></Route>
        <Route path="/cards" Component={Cards}></Route>
        <Route path="/carousel" Component={Carousel}></Route>
        <Route path="/layouts" Component={Layouts}></Route>
        <Route path="/workflow" Component={WorkflowApp}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
