import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { getBasket, getProducts, getUser } from "./utils";
import Data from "./components/Data.jsx";
import { uid } from "uid";
import reducer from "./reducer.jsx";

const initialState = {
  amount: 0,
  total: 0,
  basket: getBasket("basket"),
  cart: Data,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const id = uid();
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [amountp, setAmountp] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(getUser("user"));
  const [description, setDescription] = useState("");
  const [basket, setBasket] = useState(getBasket("basket"));
  const [products, setProducts] = useState(getProducts("products"));
  const image = `https://static.vecteezy.com/system/resources/previews/021/311/747/original/pizza-transparent-background-png.png`;

  const inc = (id) => {
    dispatch({ type: "INC", payload: id });
  };
  const dec = (id) => {
    dispatch({ type: "DEC", payload: id });
  };
  const rem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const clearAll = () => {
    dispatch({ type: "CLEAR" });
    localStorage.removeItem("basket");
    // location.reload();
  };
  const login = () => {
    const newUser = { id: id, name: name, psw: password };
    setUser(newUser);
    navigate("/");
  };
  const addProduct = () => {
    const newProduct = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      amount: amountp,
    };
    setProducts([...products, newProduct]);
  };
  const addBasket = (id, title, price, description, image, amountp) => {
    const newBasketItem = {
      id: id,
      title: title,
      price: price,
      description: description,
      image: image,
      amount: amountp,
    };
    JSON.parse(localStorage.getItem("basket")).filter((prod) => prod.id === id);
    setBasket([...basket, newBasketItem]);
  };

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(Data));
  // }, [Data]);
  window.addEventListener("DOMContentLoaded", () =>
    localStorage.setItem("products", JSON.stringify(Data))
  );
  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("products", JSON.stringify(products));
  }, [user, products, basket]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        inc,
        dec,
        clearAll,
        rem,
        image,
        login,
        products,
        addBasket,
        addProduct,
        user,
        setUser,
        name,
        setName,
        price,
        setPrice,
        title,
        setTitle,
        basket,
        setBasket,
        amountp,
        setAmountp,
        password,
        setPassword,
        description,
        setDescription,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
