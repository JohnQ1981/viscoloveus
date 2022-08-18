import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import SignIn from "../sing-in/sing-in.component";
import './navigation.styles.scss'
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo-container"><CrwnLogo className="logo" /></div>
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        <Link className="nav-link" to="/sign-in">
          SIGN IN
        </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
