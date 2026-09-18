// import ReactDOM from "react-dom";
import HeaderStyled from "./styled/HeaderStyle";
import NavLink from "./styled/NavLink";
import BrandLogo from "./styled/BrandLogo"
import SearchBar from "./styled/SearchBar";
import PictureLink from "./styled/PictureLink";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




import React, { useState } from "react";

const categories = ["MEN", "WOMEN", "KIDS", "HOME & LIVING", "DISCOVER"];

function Header({ activeCategory, onCategoryClick, cart = [], wishlist = [], lastOrder, onCheckout, searchQuery, onSearchChange }) {
  const [openPanel, setOpenPanel] = useState(null);

  const handlePanelClick = (panel) => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckoutClick = () => {
    onCheckout();
    setOpenPanel("Receipt");
  };

  return (
      <div className="header_wraper">
    <HeaderStyled>
        <div className="left-items">
        <FontAwesomeIcon className="bar_icon"  icon="bars"/>
        <BrandLogo className="brand_logo" />

      {categories.map((category) => (
        <NavLink
          key={category}
          className="nav_link"
          active={activeCategory === category}
          onClick={onCategoryClick}
        >
          {category}
        </NavLink>
      ))}
        </div>
        <div className="right-items">
        <SearchBar className="search-bar" value={searchQuery} onChange={onSearchChange} />
        <div className="profile-links">
      <PictureLink icon="user" link="Profile" onClick={() => handlePanelClick("Profile")} />
      <PictureLink icon="bookmark" link={`Wishlist (${wishlist.length})`} onClick={() => handlePanelClick("Wishlist")} />
      <PictureLink icon="shopping-bag" link={`Bag (${cart.length})`} onClick={() => handlePanelClick("Bag")} />
      </div>

        </div>




    </HeaderStyled>
    {openPanel === "Profile" && (
      <div className="header_panel">
        <strong>Profile</strong>
        <p>Welcome back!</p>
      </div>
    )}
    {openPanel === "Wishlist" && (
      <div className="header_panel">
        <strong>Wishlist</strong>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul className="bag_list">
            {wishlist.map((item) => (
              <li key={item.id}>{item.name} — ₹{item.price}</li>
            ))}
          </ul>
        )}
      </div>
    )}
    {openPanel === "Bag" && (
      <div className="header_panel">
        <strong>Bag</strong>
        {cart.length === 0 ? (
          <p>Your bag is empty.</p>
        ) : (
          <>
            <ul className="bag_list">
              {cart.map((item, index) => (
                <li key={index}>{item.name} — ₹{item.price}</li>
              ))}
            </ul>
            <p className="bag_total">Total: ₹{cartTotal}</p>
            <button className="checkout_btn" onClick={handleCheckoutClick}>Checkout</button>
          </>
        )}
      </div>
    )}
    {openPanel === "Receipt" && lastOrder && (
      <div className="header_panel receipt">
        <strong>Order Confirmed ✓</strong>
        <p>Order ID: #{lastOrder.id}</p>
        <ul className="bag_list">
          {lastOrder.items.map((item, index) => (
            <li key={index}>{item.name} — ₹{item.price}</li>
          ))}
        </ul>
        <p className="bag_total">Total Paid: ₹{lastOrder.total}</p>
        <p>Thank you for shopping with ShopMe!</p>
      </div>
    )}
    </div>
  );
}

export default Header;
