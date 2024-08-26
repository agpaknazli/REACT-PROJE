import "./App.scss";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import { categories, products } from "./helper/data";


function App() {
  return (
    <>
      <Header categorieS={categories}/>
      <Products />
    </>
  );
}

export default App;
