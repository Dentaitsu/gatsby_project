import React from "react"
import {graphql, Link} from "gatsby";
import style from "../styles/main.css"


export default function ShopPage({ data }) {
    const products = data?.allProductsJson?.nodes || [];

    return (
        <div className="container">
            <h1 className="title">Webshop</h1>
            <div className="grid">
                {products.map(product => (
                    <div key={product.name} className="card">
                        <span className="category">{product.category}</span>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="description">{product.description}</p>
                        <div className="price-tag">CHF {product.price}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const query = graphql`
  query {
    allProductsJson {
      nodes {
        name
        price
        category
        description
      }
    }
  }
`