import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

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
  const location = useLocation();
  // Lấy ra category từ đường dẫn
  const category = location.pathname.split("/")[2];
  // Tạo filter rỗng là object
  const [filters, setFilter] = useState({});
  // Tạo sort
  const [sort, setSort] = useState("newest");
  // Tạo function để filter
  const handleFilters = (e) => {
    const val = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: val,
    });
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      {category === "nu" && <Title>Đồ nữ</Title>}
      {category === "nam" && <Title>Đồ nam</Title>}
      {category === "doi" && <Title>Đồ đôi</Title>}
      <FilterContainer>
        <Filter>
          <FilterText>Lọc sản phẩm:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option>Màu sắc</Option>
            <Option value="white">Trắng</Option>
            <Option value="black">Đen</Option>
            <Option value="red">Đỏ</Option>
            <Option value="bisque">Be</Option>
            <Option value="yellow">Vàng</Option>
            <Option value="blue">Xanh</Option>
            <Option value="violet">Tím</Option>
            <Option value="gray">Xám</Option>
            <Option value="pink">Xám</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>Kích cỡ</Option>
            <Option value="xs">XS</Option>
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
            <Option value="xxl">XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sắp xếp theo:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Mới nhất</Option>
            <Option value="esc">Giá: Từ cao đến thấp</Option>
            <Option value="desc">Giá: Từ thấp đến cao</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
