import React from 'react'

import styled from 'styled-components'


function BrandFocusCard(props) {
  const product = { id: props.id, name: props.brandName, price: props.price, image: props.image };
  const isWishlisted = (props.wishlist || []).some((item) => item.id === props.id);

  return (
    <div className={props.className}>
        <button
          className={`wishlist_btn${isWishlisted ? " active" : ""}`}
          onClick={() => props.onToggleWishlist(product)}
          aria-label="Toggle wishlist"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
        <img width="100%" src={props.image} alt="brandFocuscard"/>
        <div className="desc">
            <h5>{props.brandName}</h5>
            <p>{props.message}</p>
            <p className="price">₹{props.price}</p>
            <button className="add_to_cart_btn" onClick={() => props.onAddToCart(product)}>Add to Cart</button>
        </div>

    </div>
  )
}


const BrandFocusCardStyled = styled(BrandFocusCard)`
max-width:290px;
min-width:290px;
position:relative;
margin-bottom:110px;


.desc{
    position:relative;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding:15px 15px 15px 15px;
    max-width:87%;
    top:-70px;
    background-color:#fff;
    margin: 0 auto;
    text-align:center;
    line-height:1.2;


}
.desc h5{
    font-weight:700;
    line-height:1;

}
.desc p{
    font-weight:700;
    line-height:1;
}

.desc .price{
    color:#0f766e;
    margin-top:8px;
}

.desc .add_to_cart_btn{
    background: #0f766e;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    font-weight: 600;
    margin-top: 10px;
    transition: background 0.15s ease;
}

.desc .add_to_cart_btn:hover{
    background: #0d5f58;
}

.wishlist_btn{
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    background: #fff;
    border: 1px solid #ececec;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 16px;
    color: #94969f;
    cursor: pointer;
    line-height: 1;
}

.wishlist_btn.active{
    color: #e11d48;
    border-color: #e11d48;
}
`


export default BrandFocusCardStyled