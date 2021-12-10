import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #fafe, #2cccff);

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })};
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;

  background-color: black;

  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  transition: all 1s ease;
  &:hover {
    background-color: teal;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  text-align: right;
`;

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Wrapper>
        <Title>ĐĂNG NHẬP</Title>
        <Form>
          <Input
            placeholder="Tài khoản"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>ĐĂNG NHẬP</Button>
          <span style={{ fontSize: "12px" }}>
            BẠN CHƯA CÓ TÀI KHOẢN? HÃY TẠO MỘT TÀI KHOẢN MỚI!
          </span>
          <Link>TẠO TÀI KHOẢN MỚI</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
