import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import About from "./pages/About";
import MyNavBar from "./components/MyNavBar";
import Registro from "./pages/Registro";

function App() {
    return (
        <>
            <MyNavBar />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/product-details/:idProduct"
                    element={<Details />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="about" element={<About />} />
                <Route path="registro" element={<Registro />} />
            </Routes>
        </>
    );
}

export default App;
