import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative group overflow-hidden transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                        <img
                            className="max-h-[160px] group-hover:scale-110"
                            src={product.image}
                        />
                    </div>
                </div>
                <div className="absolute top-0 right-0 ">
                    <button>Add to Card</button>
                </div>
            </div>
            <div>
                <h3>{product.category}</h3>
                <Link to={`/products/${product.id}`}>
                    <h2>{product.title}</h2>
                </Link>
                <span>{product.price}</span>
           gg
            </div>
        </div>
    );
};

export default Products;
