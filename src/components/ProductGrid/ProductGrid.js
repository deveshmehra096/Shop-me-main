import React from "react";
import data from "../../data";
import "./ProductGrid.css";

function ProductGrid({ category, onAddToCart, wishlist = [], onToggleWishlist, searchQuery = "" }) {
  const query = searchQuery.trim().toLowerCase();

  const products = query
    ? Object.values(data["category-products"])
        .flat()
        .filter((product) => product.name.toLowerCase().includes(query))
    : data["category-products"][category];

  if (!products || products.length === 0) {
    return (
      <p className="no_products">
        {query ? `No products found for "${searchQuery}".` : "No products in this category yet."}
      </p>
    );
  }

  return (
    <div className="product_grid">
      {products.map((product) => {
        const isWishlisted = wishlist.some((item) => item.id === product.id);
        return (
          <div className="product_card" key={product.id}>
            <button
              className={`wishlist_btn${isWishlisted ? " active" : ""}`}
              onClick={() => onToggleWishlist(product)}
              aria-label="Toggle wishlist"
            >
              {isWishlisted ? "♥" : "♡"}
            </button>
            <img src={product.image} alt={product.name} />
            <p className="product_name">{product.name}</p>
            <p className="product_price">₹{product.price}</p>
            <button className="add_to_cart_btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;
