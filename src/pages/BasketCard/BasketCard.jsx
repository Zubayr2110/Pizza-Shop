import {
  SRightC,
  SRightC1,
  SRightC3,
  SRightCDecI,
  SRightCImg,
  SRightCT,
  SRightCT2,
  SRightCT3,
  SRightCT3I,
} from "../../components/Styled";

import { useGlobalContext } from "../../context";
import { decreaseImg, increseImg } from "../../components/export_img";

export default function BasketCard({
  id,
  title,
  price,
  amount,
  description,
  image,
}) {
  const { rem, inc, dec } = useGlobalContext();

  return (
    <SRightC>
      <SRightCImg src={image} alt="img" />
      <SRightC1>
        <SRightCT>{title}</SRightCT>
        <SRightCT2>{description}</SRightCT2>
        <SRightC3>
          <SRightCT3>${price}</SRightCT3>
          <SRightCT3I>
            <SRightCDecI
              src={decreaseImg}
              alt="img"
              style={{ marginLeft: -10 }}
              onClick={amount <= 1 ? () => rem(id) : () => dec(id)}
            />
            <p className="numbers_text">{amount}</p>
            <SRightCDecI src={increseImg} alt="img" onClick={() => inc(id)} />
          </SRightCT3I>
        </SRightC3>
      </SRightC1>
    </SRightC>
  );
}
