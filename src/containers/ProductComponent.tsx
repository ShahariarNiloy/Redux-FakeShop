import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state: any) => state.allProducts.products);
  const renderList = products.map((product: any) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column " key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="ui card productCard">
              <div className="image">
                <img src={image} alt={title} className="productImage" />
              </div>
              <div className="content">
                <div className="header productHeader">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductComponent;
