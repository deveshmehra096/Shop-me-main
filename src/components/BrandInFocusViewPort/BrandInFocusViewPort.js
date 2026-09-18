import React, { Component } from 'react'
import data from "../../data";
import "./BrandInFocusViewPort.css";
import BrandFocusCard from '../BrandFocusCard/BrandFocusCard';

class BrandInFocusViewPort extends Component {
  render() {
    return (
      <div className="bif_card_viewport">
              {
        data["brands-focus-images"].map(element=>{
        return <BrandFocusCard
          key={element.id}
          id={element.id}
          image={element.image}
          brandName={element["brand-name"]}
          message={element.message}
          price={element.price}
          wishlist={this.props.wishlist}
          onAddToCart={this.props.onAddToCart}
          onToggleWishlist={this.props.onToggleWishlist}
        />
        })
      }

      </div>
    )
  }
}

export default BrandInFocusViewPort;