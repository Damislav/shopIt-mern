import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} />{" "}
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
