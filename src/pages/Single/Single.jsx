// import './Single.css'
// import { SSDingleCOTBtn1, SSDingleCOTBtn2, SSingleCOImg1, SSingleCOT, SSingleCOTB, SSingleCOTH1, SSingleCOTP, SSingleCOTPice } from '../../components/Styled.jsx'
// import { useParams } from 'react-router';
// import { useGlobalContext } from '../../context.jsx';

// export default function Single() {
//     const { products } = useGlobalContext()
//   const { id } = useParams();
//   const singleProduct = products.find((item) => item.id === id);
//   const { image, title, description, price } = singleProduct;
//   return (
//     <>
//       <div className="singleC">
//         <div className="singleCO">
//           <div className="singleCOImg">
//             <SSingleCOImg1 src={image} alt="" />
//           </div>
//           <SSingleCOT>
//             <SSingleCOTH1>{title}</SSingleCOTH1>
//             <SSingleCOTP>{description}</SSingleCOTP>
//             <SSingleCOTPice>${price}</SSingleCOTPice>
//             <SSingleCOTB>
//               <SSDingleCOTBtn1>
//                 <i className="fa-solid fa-cart-shopping mainIPCBtnI"></i>Buy
//               </SSDingleCOTBtn1>
//               <SSDingleCOTBtn2>
//                 <i className="fa-solid fa-heart mainIPCIH"></i> Like
//               </SSDingleCOTBtn2>
//             </SSingleCOTB>
//           </SSingleCOT>
//         </div>
//       </div>
//     </>
//   );
// }

import "./Single.css";
import {
  SSDingleCOTBtn1,
  SSDingleCOTBtn2,
  SSingleCOImg1,
  SSingleCOT,
  SSingleCOTB,
  SSingleCOTH1,
  SSingleCOTP,
  SSingleCOTPice,
} from "../../components/Styled.jsx";
import { useNavigate, useParams } from "react-router";
import { useGlobalContext } from "../../context.jsx";
import Data from "../../components/Data.jsx";

export default function Single() {
  const { products, addBasket } = useGlobalContext();
  const { id } = useParams();
  const singleProduct = products.find((item) => item.id === id);
  // console.log(singleProduct);
  const { image, title, description, price } = singleProduct;
  const navigate = useNavigate()
  return (
    <>
      <div className="singleC">
        <div className="singleCO">
          <div className="singleCOImg">
            <SSingleCOImg1 src={image} alt="" />
          </div>
          <SSingleCOT>
            <SSingleCOTH1>{title}</SSingleCOTH1>
            <SSingleCOTP>{description}</SSingleCOTP>
            <SSingleCOTPice>${price}</SSingleCOTPice>
            <SSingleCOTB>
              <SSDingleCOTBtn1
                style={{
                  cursor: "pointer",
                }}
                onClick={() => addBasket(id, title, price, description, image)}
              >
                <i className="fa-solid fa-cart-shopping mainIPCBtnI"></i>Buy
              </SSDingleCOTBtn1>
              <SSDingleCOTBtn1
                onClick={() => navigate("/")}
                style={{
                  cursor: "pointer",
                  marginLeft: "20px",
                  background: "greenyellow",
                  boxShadow: "none",
                }}
              >
                Back
              </SSDingleCOTBtn1>
            </SSingleCOTB>
          </SSingleCOT>
        </div>
      </div>
    </>
  );
}
