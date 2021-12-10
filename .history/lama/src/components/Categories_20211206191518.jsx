import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
  ${mobile({
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
  }
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
