import { useNavigate } from "react-router";
import {
  ChatbubbleImg,
  EmailImgL,
  GroupImg,
  GroupImg2,
  GroupImg3,
  GroupImg4,
  MenuBook,
  NotificationImg,
  PersonImg,
  Piechartimg,
  SearchImg,
  SettingsImgSL,
  UnsplashImg,
  decreaseImg,
  increseImg,
  pizzaimg,
  rightSI1P,
} from "../../components/export_img";

import "./Home.css";
import { useGlobalContext } from "../../context";
import HomeC from "./HomeC";
import {
  SRightC,
  SRightC1,
  SRightC3,
  SRightCImg,
  SRightCT,
  SRightCT2,
  SRightCT3,
  SRightCT3I,
} from "../../components/Styled";
import BasketCard from "../BasketCard/BasketCard";
import Data from "../../components/Data";
import BasketC from "../BasketCard/BasketC";

export default function Home() {
  const navigate = useNavigate();
  const { user, products, total, amount, clearAll } = useGlobalContext();
  const TOrF = () => {
    if (user) {
      return navigate("/addpizza");
    } else return alert("Sign in to add a product"), navigate("/signin/user");
  };
  return (
    <>
      <div className="conteiner">
        <div className="leftsidebar">
          <div className="leftsidebar_content">
            <button className="leftsidebar_content-button1">
              <img
                src={MenuBook}
                alt="img"
                className="leftsidebar_content-button1-img"
              />
            </button>
            <button
              className="leftsidebar_content-button2"
              onClick={() => navigate("/signin/user")}
            >
              <img
                src={PersonImg}
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
            <button
              className="leftsidebar_content-button3"
              onClick={() => TOrF()}
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
            <button className="leftsidebar_content-button3">
              <img
                src={SettingsImgSL}
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
            <button className="leftsidebar_content-button3">
              <img
                src={EmailImgL}
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
            <button className="leftsidebar_content-button3">
              <img
                src={Piechartimg}
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
            <button className="leftsidebar_content-button3">
              <img
                src={ChatbubbleImg}
                alt="img"
                className="leftsidebar_content-button2-img"
              />
            </button>
          </div>
        </div>
        <div className="main">
          <div className="main_content">
            <header>
              <div className="header_text">
                <p className="header_text1" id="nicname">
                  {user.name}
                </p>
                <p className="header_text2">Welcome Back</p>
              </div>
              <form className="searchbar">
                <img src={SearchImg} alt="img" className="searchbar_img" />
                <input type="text" id="header_search" placeholder="Search" />
              </form>
            </header>
            <div className="main_content-banner">
              <h1>
                Make Your First Order and Get <span> 50% Off</span>
              </h1>
              <p className="main_content-banner-p">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without.
              </p>
              <button className="main_content-banner-btn">Order Now </button>
            </div>
            <div className="menu">
              <p className="menu_text1">Our Menu</p>
              <div className="menu_content">
                <img src={GroupImg} alt="img" />
                <p className="menu_content-text">Pizza</p>
              </div>
              <div className="menu_content1">
                <img src={GroupImg2} alt="img" />
                <p className="menu_content-text">Burger</p>
              </div>
              <div className="menu_content1">
                <img src={GroupImg3} alt="img" />
                <p className="menu_content-text">Fries</p>
              </div>
              <div className="menu_content1">
                <img src={GroupImg4} alt="img" />
                <p className="menu_content-text">Pack</p>
              </div>
              <p className="menu_text2">See All</p>
            </div>
            <div className="items">
              {products.map((item) => (
                <HomeC key={item.id} {...item} />
              ))}
              {/* {Data.map((item) => (
                <HomeC key={item.id} {...item} />
              ))} */}
            </div>
          </div>
        </div>
        <div className="rightsidebar">
          <div className="rightsidebar_content">
            <div className="rightsidebar_content-1">
              <img src={UnsplashImg} alt="" />
              <p className="rightsidebar_content-1-text">{user.name}</p>
              <img
                src={NotificationImg}
                alt="img"
                className="rightsidebar_content-1-n"
              />
            </div>
            <div className="rightsidebar_content-2"></div>
            <ul className="rightsidebar_content-2-ul">
              <li className="rightsidebar_content-2-item">Order Menu</li>
              <li className="rightsidebar_content-2-item1">See All</li>
            </ul>
            <div className="rightsidebar_content-3">
              <BasketC />
            </div>
            <ul className="price">
              <li className="price-li">Total Price</li>
              <p className="price_li">${total}</p>
            </ul>
            <ul className="price">
              <li className="price-li">Amount</li>
              <p className="price_li">{amount}</p>
            </ul>
            <button className="buttonfn" onClick={() => clearAll()}>
              Clear Basket
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
