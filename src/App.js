import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navigation/Nav';
import Recommend from './Component/Recommend/Recommend';
import Products from './Component/Products/Products';
import Sidebar from './Component/Sidebar/Sidebar';
import { useState } from 'react';
import products from './Component/DB/data';
import Card from './Component/CustomComponent/Card';

function App() {

  // ----------- Input Filter(Search function) -----------

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredItems = products.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  // ----------- Radio Filter(Search function) -----------
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
    console.log(selectedCategory);
  }

  // ----------- button Filter(Search function) -----------

  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }


  function filterData(products, selected, query) {
    let filteredProducts = products

    //Fltering input items

    if (query) {
      filteredProducts = filteredItems
    }

    //selected Filters

    if (selected) {

      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected)
    }

 return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );  
  }

 const result=filterData(products,selectedCategory,query)


  return (
    <div className="">
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommend handleClick={handleClick}/>
      <Products result={result}/>
    </div>
  );
}

export default App;
