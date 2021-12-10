import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Products = ({ category, filters, sort }) => {
  console.log(category, filters, sort);
  // danh sách sản phẩm
  const [products, setProducts] = useState([]);
  // danh sách sản phẩm đã đc lọc
  const [filteredProducts, setFilteredProducts] = useState([]);
  // Tạo useEffect để tự động cập nhật mỗi khi category thay đổi
  useEffect(() => {
    // Tạo hàm lấy sản phẩm để cập nhật trên giao diện
    const getProducts = async () => {};
  }, [category]);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
