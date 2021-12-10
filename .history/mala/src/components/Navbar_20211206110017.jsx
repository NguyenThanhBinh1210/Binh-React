import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 33.33%;
`;
const Center = styled.div`
  width: 33.33%;
`;
const Right = styled.div`
  width: 33.33%;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius
          eaque dolor maxime similique minima ad exercitationem amet veniam nam
          libero corporis laboriosam, ipsa, ratione officia aliquam consequuntur
          eveniet at!
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
