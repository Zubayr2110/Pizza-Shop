import {
  StyledSignInBtn,
  StyledSignInContainer,
  StyledSignInDisting,
  StyledSignInDistinghr1,
  StyledSignInDistingtext,
  StyledSignInDiv,
  StyledSignInForm,
  StyledSignInFormInp,
  StyledSignInFormInp1,
  StyledSignInFormInp2,
  StyledSignInFormInpLabel,
  StyledSignInFrame1,
  StyledSignInFrame11,
  StyledSignInFrame12,
  StyledSignInFrame1Text,
  StyledSignInH1,
  StyledSignInSBtn,
  StyledSignInSBtnP,
  StyledSignInSBtnSpan,
} from "../../components/Styled";
import { useGlobalContext } from "../../context.jsx";

import { SignUpImg1, SignUpImg2 } from "../../components/export_img";
export default function SignIn() {
  const { name, setName, password, setPassword, login } = useGlobalContext();
  return (
    <StyledSignInContainer>
      <StyledSignInDiv>
        <StyledSignInH1>Sign In</StyledSignInH1>
        <StyledSignInFrame1>
          <StyledSignInFrame11>
            <img src={SignUpImg1} alt="icon" />
            <StyledSignInFrame1Text>
              Continue with Google
            </StyledSignInFrame1Text>
          </StyledSignInFrame11>
          <StyledSignInFrame12>
            <img src={SignUpImg2} alt="icon" />
            <StyledSignInFrame1Text>
              Continue with Google
            </StyledSignInFrame1Text>
          </StyledSignInFrame12>
        </StyledSignInFrame1>

        <StyledSignInDisting>
          <StyledSignInDistinghr1 />
          <StyledSignInDistingtext>OR</StyledSignInDistingtext>
          <StyledSignInDistinghr1 />
        </StyledSignInDisting>

        <StyledSignInForm onSubmit={login}>
          <StyledSignInFormInp>
            <StyledSignInFormInpLabel>
              Enter your first name
            </StyledSignInFormInpLabel>
            <StyledSignInFormInp1
              placeholder="Enter your username"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></StyledSignInFormInp1>
          </StyledSignInFormInp>
          <StyledSignInFormInp2>
            <StyledSignInFormInpLabel>Your password</StyledSignInFormInpLabel>
            <StyledSignInFormInp1
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></StyledSignInFormInp1>
          </StyledSignInFormInp2>
          <StyledSignInSBtn>
            <StyledSignInBtn type="Submit" onClick={() => login}>
              SEND
            </StyledSignInBtn>
          </StyledSignInSBtn>
        </StyledSignInForm>
      </StyledSignInDiv>
    </StyledSignInContainer>
  );
}
