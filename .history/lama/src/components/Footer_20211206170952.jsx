import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  width: 50%;
`;

const ListWrapper = styled.div`
  display: flex;
`;

const List1 = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;
const List2 = styled(List1)``;

const ListTitle = styled.div`
  display: flex;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>KI.NGSHOP.</Logo>
        <Desc>
          Với ước mơ chinh phục hàng triệu cô gái và chàng trai trẻ, chúng tôi
          đã liên tục cho ra những mâu sản phẩm mới nhất, tốt nhất. Chúng tôi
          hứa hẹn sẽ luôn là một nơi kiếm các bạn phải ghé qua.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <ListTitle>
          <Title>Thông tin</Title>
          <Title>Chính sách</Title>
        </ListTitle>
        <ListWrapper>
          <List1>
            <ListItem>Trang chủ</ListItem>
            <ListItem>Giới thiệu</ListItem>
            <ListItem>Liên hệ công ty</ListItem>
            <ListItem>Đối tác</ListItem>
            <ListItem>Tuyển dụng</ListItem>
          </List1>
          <List2>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List2>
        </ListWrapper>
      </Center>
      <Right>
        <Title>Liên hệ</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 517 Núi Thành, Hải Châu,
          Tp.Đà Nẵng
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +84 38858 5xxx
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          thanhbinhxxxx9yt@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
