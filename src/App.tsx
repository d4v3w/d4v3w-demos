import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./components/Page";
import { QueryPage } from "./components/QueryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Page}></Route>
        <Route path="/cards" Component={QueryPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
