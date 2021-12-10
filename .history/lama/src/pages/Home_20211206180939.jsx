import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Grid from "../components/Grid";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Grid col={4} mdCol={3} smCol={2} gap={20}>
        <Product />
      </Grid>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
