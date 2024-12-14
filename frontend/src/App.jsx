import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, LoginPage, RegistrerPages, Cart, Pizza } from './pages/index'
import { Footer, Navbar, NotFound, Profile } from './views/index';
import CardProvider from "./context/CartContext";
import PizzaProvider from "./context/PizzaContext";

function App() {
  return (
    <BrowserRouter>
      <PizzaProvider>
        <CardProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegistrerPages />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CardProvider>
        </PizzaProvider>
    </BrowserRouter>
  )
}

export default App
