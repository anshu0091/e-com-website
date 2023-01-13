import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import TheJourney from "./pages/TheJourney";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Store from "./pages/Store";

import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/thejourney" element={<TheJourney />} />
            <Route path="/team" element={<Team />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />

            {user && <Route path="/" exact element={<Main />} />}
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
