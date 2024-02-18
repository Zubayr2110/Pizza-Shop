import { useNavigate } from "react-router";
import {
  SHomeItem,
  SHomeItemB,
  SHomeItemBBtn,
  SHomeItemBT,
  SHomeItemC,
  SHomeItemD,
  SHomeItemH3,
  SHomeItemImg,
} from "../../components/Styled";
import { useGlobalContext } from "../../context";
import Data from "../../components/Data";

export default function HomeC({
  id,
  image,
  title,
  description,
  amount,
  price,
}) {
  const navigate = useNavigate();
  const { addBasket } = useGlobalContext();
  const addBTF = () => {
    Data.filter(item => item.id === id)
  }
  return (
    <SHomeItem>
      <SHomeItemImg
        onClick={() => navigate(`/single/${id}`)}
        src={image}
        alt="img"
      />
      <SHomeItemC>
        <SHomeItemH3 onClick={() => navigate(`/single/${id}`)}>
          {title}
        </SHomeItemH3>
        <SHomeItemD onClick={() => navigate(`/single/${id}`)}>
          {description}
        </SHomeItemD>
        <SHomeItemB>
          <SHomeItemBT onClick={() => navigate(`/single/${id}`)}>
            {price}$
          </SHomeItemBT>
          <SHomeItemBBtn
            className="homeincbtn"
            onClick={() =>
              addBasket(id, title, price, description, image, amount)
            }
          >
            +
          </SHomeItemBBtn>
        </SHomeItemB>
      </SHomeItemC>
    </SHomeItem>
  );
}
