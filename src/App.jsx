import { useNavigate } from "react-router";
import "./App.css";
import Router from "./components/Router";
import { getUser } from "./utils";

function App() {
  const navigate = useNavigate();
  console.log(getUser());
  const routsignin = () => {
    if (!getUser()) {
      navigate("/signin/user");
    }
  };
  return (
    <>
      <Router />
      {routsignin()}
    </>
  );
}

export default App;
