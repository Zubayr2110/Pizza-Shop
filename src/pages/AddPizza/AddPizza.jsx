import { useNavigate } from "react-router";
import {
  AddPSCD,
  AddPSCFInp,
  AddPSCFP,
  AddPSCFP1,
  AddPSCFTAREA,
  AddPSContext,
  AddPSContextH1,
  AddPSFBSEND,
  AddPSI,
  AddPStyled,
  AddPStyledBakcBtn,
} from "../../components/Styled";
import { useGlobalContext } from "../../context";

export default function AddPizza() {
  const {
    title,
    setTitle,
    price,
    setPrice,
    amountp,
    setAmountp,
    description,
    setDescription,
    addProduct,
  } = useGlobalContext();
  const navigate = useNavigate()
  return (
    <>
      <AddPStyled>
        <AddPSContext>
          <AddPSContextH1>Add Pizza</AddPSContextH1>
          <AddPSCD onSubmit={addProduct}>
            <AddPSCFP>Pizza Name</AddPSCFP>
            <AddPSCFInp
              type="text"
              placeholder="Enter Product Name"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <AddPSCFP1>Pizza Price</AddPSCFP1>
            <AddPSCFInp
              type="number"
              placeholder="Enter Product Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <AddPSCFP1>Amount</AddPSCFP1>
            <AddPSCFInp
              type="number"
              placeholder="amount"
              required
              value={amountp}
              onChange={(e) => setAmountp(e.target.value)}
            />
            <AddPSCFP1>Pizza Description</AddPSCFP1>
            <AddPSCFTAREA
              name="description"
              cols="45"
              placeholder="How many minutes"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></AddPSCFTAREA>
            <AddPSFBSEND>Add Pizza</AddPSFBSEND>
          </AddPSCD>
          <AddPSI></AddPSI>
        </AddPSContext>
        <AddPStyledBakcBtn onClick={() => navigate('/')}> back</AddPStyledBakcBtn>
      </AddPStyled>
    </>
  );
}
