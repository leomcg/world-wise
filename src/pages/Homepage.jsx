import { NavLink } from "react-router-dom";
import PageNavBar from "../components/PageNavBar";

function Homepage() {
  return (
    <div>
      <PageNavBar />
      <h1>
        <NavLink to="/app">Go to app</NavLink>
      </h1>
    </div>
  );
}

export default Homepage;
