import React from "react";
// import ProductCarousel from "../Components/ProductCarousel"; // Update the path to your component
import ProductList from "../Components/ProductList";
import ProductCarousel from "../Components/ProductCarousel";

const HomePage = () => {
  // // Define your product data
  // const products = [
  //   {
  //     title: "Product 1",
  //     description: "Description for Product 1",
  //     imageUrl:
  //       "https://e1.pxfuel.com/desktop-wallpaper/882/841/desktop-wallpaper-cadbury-dairy-milk-silk-special-silk-gift-pack-combo-chocolates-dairy-milk.jpg",
  //   },
  //   {
  //     title: "Product 1",
  //     description: "Description for Product 1",
  //     imageUrl:
  //       "https://c1.wallpaperflare.com/preview/665/133/316/candy-bar-sweetness-chocolate-mars.jpg",
  //   },
  //   {
  //     title: "Product 1",
  //     description: "Description for Product 1",
  //     imageUrl:
  //       "https://s.tmimgcdn.com/scr/1200x750/237300/chocolate-pack-game-ready-3d-model_237333-original.png",
  //   },
  //   {
  //     title: "Product 1",
  //     description: "Description for Product 1",
  //     imageUrl:
  //       "https://img.freepik.com/free-vector/chocolate-advertising-realistic-set-milk-white-dark-delicious-luxury-brand-bars-packaging-design-isolated_1284-32282.jpg?w=2000",
  //   },
  //   // Add more product objects here
  // ];

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-6">Featured Products</h1>
      <ProductCarousel />
      <ProductList />
    </div>
  );
};

export default HomePage;
