import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import CrouselView from './components/Crousel/Crousel';
import DealCardViewPort from './components/DealCardViewPort/DealCardViewPort';
import BrandInFocusViewPort from './components/BrandInFocusViewPort/BrandInFocusViewPort'
import ProductGrid from './components/ProductGrid/ProductGrid'
import DealsPage from './components/DealsPage/DealsPage'


library.add(fas)





class App extends Component {
  state = {
    activeCategory: "MEN",
    cart: [],
    wishlist: [],
    lastOrder: null,
    searchQuery: "",
    activeDeal: null,
  };

  handleCategoryClick = (category) => {
    this.setState({ activeCategory: category, searchQuery: "", activeDeal: null });
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value, activeDeal: null });
  };

  handleOpenDeal = (dealId) => {
    this.setState({ activeDeal: dealId });
    window.scrollTo(0, 0);
  };

  handleBackHome = () => {
    this.setState({ activeDeal: null });
  };

  handleAddToCart = (product) => {
    this.setState((prevState) => ({ cart: [...prevState.cart, product] }));
  };

  handleToggleWishlist = (product) => {
    this.setState((prevState) => {
      const exists = prevState.wishlist.some((item) => item.id === product.id);
      return {
        wishlist: exists
          ? prevState.wishlist.filter((item) => item.id !== product.id)
          : [...prevState.wishlist, product],
      };
    });
  };

  handleCheckout = () => {
    this.setState((prevState) => {
      if (prevState.cart.length === 0) return null;
      const total = prevState.cart.reduce((sum, item) => sum + item.price, 0);
      const order = {
        id: Math.floor(100000 + Math.random() * 900000),
        items: prevState.cart,
        total,
      };
      return { lastOrder: order, cart: [] };
    });
  };

  render() {
    return (
      <div className="App container-fluid">
       <Header
         activeCategory={this.state.activeCategory}
         onCategoryClick={this.handleCategoryClick}
         cart={this.state.cart}
         wishlist={this.state.wishlist}
         lastOrder={this.state.lastOrder}
         onCheckout={this.handleCheckout}
         searchQuery={this.state.searchQuery}
         onSearchChange={this.handleSearchChange}
       />

       {this.state.activeDeal ? (
         <DealsPage
           dealId={this.state.activeDeal}
           wishlist={this.state.wishlist}
           onAddToCart={this.handleAddToCart}
           onToggleWishlist={this.handleToggleWishlist}
           onBack={this.handleBackHome}
         />
       ) : (
         <>
           <p className="category_banner">
             {this.state.searchQuery.trim()
               ? `Search results for "${this.state.searchQuery}"`
               : `Showing: ${this.state.activeCategory}`}
           </p>

           <ProductGrid
             category={this.state.activeCategory}
             onAddToCart={this.handleAddToCart}
             wishlist={this.state.wishlist}
             onToggleWishlist={this.handleToggleWishlist}
             searchQuery={this.state.searchQuery}
           />

           <CrouselView/>
           <DealCardViewPort onOpenDeal={this.handleOpenDeal}/>

           <h2>BRANDS IN FOCUS</h2>
           <p>Show some brand love</p>

           <BrandInFocusViewPort
             wishlist={this.state.wishlist}
             onAddToCart={this.handleAddToCart}
             onToggleWishlist={this.handleToggleWishlist}
           />
         </>
       )}
      </div>
    );
  }
}

export default App;
