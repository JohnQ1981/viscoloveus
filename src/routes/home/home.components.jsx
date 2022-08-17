import Categories from "../../components/categories/categories";
import { Outlet}  from "react-router-dom";
const Home = () => {
  return (
    <div className="categories-container">
    
      <Categories />
      <Outlet />
    </div>
  );
};

export default Home;
