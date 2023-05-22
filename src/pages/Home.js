import React, { useContext} from 'react';
// import ProductContent
import { ProductContext } from '../contexts/ProductContext';

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-4 xl:grid-col-5 gap-[30px]'>
          {filterProduct.map(pitem =>(
            <div className='w-full h-[300px] bg-pink-300 mb-4'>{pitem.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
