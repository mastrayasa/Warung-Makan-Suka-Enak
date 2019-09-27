import React, {Component } from 'react'
import {storeProducts} from './data'
const ProductContext = React.createContext();

class ProductProvider extends Component{
    state = {
        products:storeProducts
    }
    addToCart = () => {
        console.log("add to cart")
    }
    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConcumer = ProductContext.Consumer;

export { ProductProvider, ProductConcumer};