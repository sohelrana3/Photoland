import React from "react";

const Products = ({ product }) => {
    return (
        <div className="border border-[#e4e4e4] h-[300px] mb-4 relative group overflow-hidden transition">
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[200px] mx-auto flex justify-center items-center">
                    <img
                        className="max-h-[160px] group-hover:scale-110"
                        src={product.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;
