import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Slide_2.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  width: 25%;
  height: 480px;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  position: absolute;
  left: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>BẠN CHƯA CÓ TÀI KHOẢN? HÃY TẠO TÀI KHOẢN.</Link>
          <Link>TẠO TÀI KHOẢN MỚI</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
