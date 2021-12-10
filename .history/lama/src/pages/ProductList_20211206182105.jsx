import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Áo Đẹp</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Lọc sản phẩm:</FilterText>
          <Select>
            <Option disabled selected>
              Màu sắc
            </Option>
            <Option>Trắng</Option>
            <Option>Đen</Option>
            <Option>Đỏ</Option>
            <Option>Xanh dương</Option>
            <Option>Vàng</Option>
            <Option>Xanh</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Kích cỡ
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sắp xếp theo:</FilterText>
          <Select>
            <Option selected>Mặc định</Option>
            <Option>Giá (asc)</Option>
            <Option>Giá (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      {/* <Products /> */}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
