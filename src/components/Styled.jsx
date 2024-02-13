import styled from "styled-components";

export const SFooter = styled.footer`
  margin-top: 150px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  bottom: 0;
  width: 100%;
`;

// Sign In Styled Components

export const StyledSignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;
export const StyledSignInDiv = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 430px;
  height: 630px;
  border-radius: 12px;
  padding: 48px 28px;
  background: var(--foundation-white-white-50, #fefefe);
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
  border: 2px solid green;
`;
export const StyledSignInH1 = styled.h1`
  width: 100%;
  margin-left: 0;
  margin-top: -39px;
  text-align: center;
  color: var(--foundation-grey-grey-900, #151515);
  font-family: sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const StyledSignInFrame1 = styled.div`
  margin-top: 36px;
  width: 374px;
  height: 104px;
`;
export const StyledSignInFrame11 = styled.button`
  cursor: pointer;
  width: 374px;
  height: 44px;
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--foundation-grey-grey-900, #151515);
  background-color: white;
  outline: none;
`;
export const StyledSignInFrame12 = styled.button`
  cursor: pointer;
  outline: none;
  margin-top: 16px;
  width: 374px;
  height: 44px;
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--foundation-grey-grey-900, #151515);
  background-color: white;
`;
export const StyledSignInFrame1Text = styled.p`
  color: var(--foundation-grey-grey-900, #151515);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const StyledSignInDisting = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 374px;
  height: 15px;
`;

export const StyledSignInDistinghr1 = styled.div`
  margin-top: -16px;
  width: 120px;
  border: 1px solid;
`;
export const StyledSignInDistingtext = styled.p`
  color: var(--black, #24272c);
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
// Style  form
export const StyledSignInForm = styled.form`
  margin-top: 36px;
  width: 374px;
  height: 280px;
  // border: 1px solid;
`;
export const StyledSignInFormInp = styled.div`
  width: 100%;
  height: 68px;
`;
export const StyledSignInFormInpLabel = styled.p`
  color: black;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
export const StyledSignInFormInp1 = styled.input`
  width: 370px;
  height: 47px;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
  background: var(--foundation-white-white-50, #fefefe);
  color: var(--foundation-grey-grey-900, #151515);
  font-feature-settings: "clig" off, "liga" off;
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  outline: none;
`;
export const StyledSignInFormInp2 = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 68px;
`;
// Style Form end

// Styled Button and Text
export const StyledSignInSBtn = styled.div`
  margin-top: 50px;
  width: 374px;
  height: 69px;
  // border: 1px solid;
`;
export const StyledSignInBtn = styled.button`
  cursor: pointer;
  width: 374px;
  height: 40px;
  border-radius: 4px;
  background: var(--foundation-purple-purple-500, #6200ee);
  border: none;
  color: var(--foundation-white-white-50, #fefefe);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const StyledSignInSBtnP = styled.p`
  padding-top: 12px;
  color: var(--black, #24272c);
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;
export const StyledSignInSBtnSpan = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--blue, #1b28bc);
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;
// Sign In Styled Components end

// Single Page Styled

export const SSingleCOImg1 = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const SSingleCOT = styled.div`

  padding: 50px;
  width: 60%;
  height: 80%;
  text-align: center;
`;
export const SSingleCOTH1 = styled.h1`
  margin: 0 auto;
  color: black;
  font-size: 45px;
  font-weight: bold;
  font-family: sans-serif;
`;
export const SSingleCOTP = styled.p`
  padding-top: 30px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: rgb(65, 65, 65);
`;
export const SSingleCOTPice = styled.p`
  padding-top: 30px;
  font-weight: bold;
  color: green;
  font-size: 40px;
  font-family: sans-serif;
`;
export const SSingleCOTB = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SSDingleCOTBtn1 = styled.button`
  width: 170px;
  height: 60px;
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  background: blueviolet;
  box-shadow: 0px 0px 9px 1px rgb(132, 0, 255);
`;
export const SSDingleCOTBtn2 = styled.button`
  width: 150px;
  height: 60px;
  border: none;
  outline: none;
  font-size: 30px;
  margin-left: 50px;
  font-weight: bold;
  border-radius: 10px;
  background: greenyellow;
  box-shadow: 0px 0px 9px 1px green;
`;

// Single Page Styled end

// AddProduct Styled Components

export const AddPStyled = styled.div`
  margin-top: -100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid;
`;
export const AddPStyledBakcBtn = styled.button`
  margin-top: -350px;
  width: 80px;
  height: 35px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  outline: none;
  background: greenyellow;
`
export const AddPSContext = styled.div`
  width: 80%;
  // border: 1px solid;
`;
export const AddPSContextH1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 50px;
`;
export const AddPSCD = styled.form`
  padding: 25px;
  margin: 0 auto;
  margin-top: 100px;
  width: 500px;
  height: 560px;
  border: 2px solid green;
  border-radius: 20px;
  box-shadow: 1px 1px 10px 1px greenyellow;
`;
export const AddPSCFP = styled.label`
  font-weight: bold;
  font-size: 20px;
`;
export const AddPSCFInp = styled.input`
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  outline: none;
  font-size: 25px;
  border: 2px solid green;
  border-radius: 10px;
`;
export const AddPSCFP1 = styled.label`
  font-weight: bold;
  font-size: 20px;
`;
export const AddPSCFTAREA = styled.input`
  margin-top: 20px;
  padding: 10px;
  outline: none;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 2px solid green;
  outline: none;
  font-size: 25px;
`;
export const AddPSFBSEND = styled.button`
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: greenyellow;
  font-size: 25px;
  font-weight: bold;
`;
export const AddPSI = styled.div`
  width: 100%;
  display: grid;
  grid-template-column: auto auto auto auto;
`;
// AddProduct Styled Components end

// Home styled Components

export const SHomeItem = styled.div`
  margin-top: 40px;
  display: flex;
  width: 498px;
  height: 257px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 2px 6px 30px 0px rgba(0, 0, 0, 0.1);
`;
export const SHomeItemC = styled.div`
  padding-top: 30px;

  height: 100%;
  margin-left: 15px;
`;
export const SHomeItemH3 = styled.h3`
  color: #000;
  max-height: 70px;
  max-width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 33px;
  font-style: normal;
  font-weight: 700;
  line-height: 94.687%;
  letter-spacing: 1.08px;
`;
export const SHomeItemImg = styled.img`
  cursor: pointer;
  height: 100%;
  width: 210px;
  max-width: 210px;
  border-radius: 30px;
`;
export const SHomeItemD = styled.p`
  cursor: pointer;
  margin-top: 30px;
  color: #b4bccf;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 144.687%;
  letter-spacing: 0.6px;
  max-height: 30px;
`;
export const SHomeItemB = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 60px;
  margin-top: 40px;
`;
export const SHomeItemBT = styled.p`
  cursor: pointer;
  color: #01c550;
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 144.687%;
  letter-spacing: 0.96px;
`;
export const SHomeItemBBtn = styled.button`
  cursor: pointer;
  margin-left: 150px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 15px;
  text-align: center;
  font-size: 45px;
  background-color: #ffffff;
`;









// right sidebar styled components

export const SRightC = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  border-radius: 20px;
  background: rgba(180, 188, 207, 0.30);
  box-shadow: 4px 4px 30px 0px rgba(0, 0, 0, 0.10);
`

export const SRightCImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  max-width: 120px;
  width: 120px;
  height: 100%;
`

export const SRightC1 = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
`

export const SRightCT = styled.p`
  color: #000;
  font-family: 'Roboto',sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const SRightCT2 = styled.p`
  margin-top: 10px;
  color: #61656F;
  font-family: 'Roboto',  sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const SRightC3 = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
`
export const SRightCT3 = styled.p`
  margin-top: 10px;
  color: #01C550;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const SRightCT3I = styled.div`
  margin-left: 120px;
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
`
export const SRightCDecI = styled.img`
  cursor: pointer;
`