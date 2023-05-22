import React, { useContext} from 'react';
// import ProductContent
import { ProductContext } from '../contexts/ProductContext';
//
import Products from './Products';


const Home = () => {
  const {Product} = useContext(ProductContext);
  console.log(Product);
  const filterProduct = Product.filter((item)=>(
    item.category === "men's clothing" || item.category === "women's clothing"
  ))
  console.log(filterProduct);
  return (
    <section>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-col-4 xl:grid-col-5 gap-[30px]'>
          {filterProduct.map((product)=>{
            return <Products product={product} key={product.id}/>
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
