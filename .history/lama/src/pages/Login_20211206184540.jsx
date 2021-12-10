import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://storage.googleapis.com/cdn.nhanh.vn/store/7136/bn/Slide_3.jpg")
      center;
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
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  transition: all 2s ease;
  &:hover {
    background-color: black;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: right;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>ĐĂNG NHẬP</Title>
        <Form>
          <Input placeholder="Tài khoản" />
          <Input placeholder="Mật khẩu" />
          <Button>ĐĂNG NHẬP</Button>
          <Link>BẠN CHƯA CÓ TÀI KHOẢN? HÃY TẠO MỘT TÀI KHOẢN MỚI!</Link>
          <Link>TẠO TÀI KHOẢN MỚI</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
