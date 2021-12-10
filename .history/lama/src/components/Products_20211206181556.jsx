import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import Grid from "./Grid";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  ${
    "" /* ${mobile({
    display: "grid !important",
    gridAutoColumns: "80% !important",
    gridAutoFlow: "column",
    gridTemplateColumns: "unset",
    gridColumnGap: "20px",
    overflowX: "auto",
    padding: "10px",
    scrollSnapType: "x mandatory",
    scrollSnapStop: "always",
  })};
  & > * {
    scroll-snap-align: start;
    width: auto;
  } */
  }
`;

const Products = () => {
  return (
    <Container col={4}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
