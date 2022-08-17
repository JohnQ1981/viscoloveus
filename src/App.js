import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.components";
const Shop = () => {
  return (
    <div>
      <h2>I am the Shop</h2>
    </div>
  );
};

const Navigation = () => {
  return (
    <div>
      <h2>I am the NavigationBar</h2>
      <Outlet />
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
