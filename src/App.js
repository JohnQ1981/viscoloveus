import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";
import SignIn from "./routes/sing-in/sing-in.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
