import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cards } from "./components/Cards";
import { Page } from "./components/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Page}></Route>
        <Route path="/cards" Component={Cards}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
