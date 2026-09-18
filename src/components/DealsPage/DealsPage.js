import React from "react";
import data from "../../data";
import "../ProductGrid/ProductGrid.css";
import "./DealsPage.css";

function getOffer(deal, item) {
  if (deal.type === "percent") {
    return {
      price: Math.round((item.mrp * (100 - deal.value)) / 100),
      badge: `${deal.value}% OFF`,
    };
  }
  if (deal.type === "flat") {
    return { price: item.mrp - deal.value, badge: `₹${deal.value} OFF` };
  }
  return {
    price: item.price,
    badge: `${Math.round(((item.mrp - item.price) / item.mrp) * 100)}% OFF`,
  };
}

function DealsPage({ dealId, wishlist = [], onAddToCart, onToggleWishlist, onBack }) {
  const deal = data["deals-card-images"].find((d) => d.id === dealId);
  const items = data["deal-products"][dealId];

  if (!deal || !items) {
    return null;
  }

  return (
    <div className="deals_page">
      <button className="back_btn" onClick={onBack}>← Back to home</button>
      <div className="deals_banner">
        <h6>HOT DEALS</h6>
        <h2>{deal.message}</h2>
        {deal.type === "flat" && <p>Free delivery on every item below.</p>}
        {deal.type === "under" && <p>Every item below is under ₹{deal.value}.</p>}
      </div>

      <div className="product_grid">
        {items.map((item) => {
          const offer = getOffer(deal, item);
          const product = { id: item.id, name: item.name, price: offer.price, image: item.image };
          const isWishlisted = wishlist.some((w) => w.id === item.id);
          return (
            <div className="product_card" key={item.id}>
              <span className="discount_badge">{offer.badge}</span>
              <button
                className={`wishlist_btn${isWishlisted ? " active" : ""}`}
                onClick={() => onToggleWishlist(product)}
                aria-label="Toggle wishlist"
              >
                {isWishlisted ? "♥" : "♡"}
              </button>
              <img src={item.image} alt={item.name} />
              <p className="product_name">{item.name}</p>
              <p className="product_price">
                ₹{offer.price} <span className="mrp">₹{item.mrp}</span>
              </p>
              {deal.type === "flat" && <p className="free_delivery">Free Delivery</p>}
              <button className="add_to_cart_btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DealsPage;
