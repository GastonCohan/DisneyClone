import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CtaLogoOne />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with Disney+ subscription. As of 03/26/24, the price of Disney+ and
            The Disney Bundle will increase by $1.
          </Description>
          <CtaLogoTwo />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/assets/login-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 600px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
  z-index: 1;
`;

const CtaLogoOne = styled.div`
  margin-bottom: 12px;
  max-width: 600px;
  width: 100%;
  height: 150px;
  background-image: url("../../assets/cta-logo-one.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`;

const CtaLogoTwo = styled.div`
  max-width: 600px;
  width: 100%;
  height: 150px;
  background-image: url("../../assets/cta-logo-two.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 14px;
  margin: 0 0 12px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`;
