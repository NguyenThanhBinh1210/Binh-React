import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "45px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  outline: none;
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Đăng ký nhận khuyến mãi</Title>
      <Desc>Hãy cho chúng tôi biết cách liên lạc với bạn.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>Gửi</Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
