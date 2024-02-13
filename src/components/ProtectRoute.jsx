import { useNavigate } from "react-router";
import { useGlobalContext } from "../context";

export default function ProtectRoute({ children }) {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  if (!user) {
    return navigate("/");
  }
  return children;
}
