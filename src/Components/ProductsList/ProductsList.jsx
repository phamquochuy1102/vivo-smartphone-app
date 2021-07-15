import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Product from "./../Product/Product";
import "./ProductsList.scss";
import { filterProducts } from "../../redux/actions/productsAction";

const ProductsList = ({ products, filterProducts }) => {
  const activeStyle = {
    color: "rgb(1, 77, 219)",
    fontWeight: "500",
    borderBottom: "1px solid rgb(1, 77, 219)",
  };
  const [activeFilter, setActiveFilter] = useState("all");
  const handleFilter = (type) => {
    setActiveFilter(type);
  };
  return (
    <div className="products-list">
      <div className="products-list__filter">
        <ul>
          <li
            onClick={() => {
              filterProducts("all");
              handleFilter("all");
            }}
            style={activeFilter === "all" ? activeStyle : null}
          >
            Tất cả
          </li>
          <li
            onClick={() => {
              filterProducts("X");
              handleFilter("X");
            }}
            style={activeFilter === "X" ? activeStyle : null}
          >
            Dòng X
          </li>
          <li
            onClick={() => {
              filterProducts("Y");
              handleFilter("Y");
            }}
            style={activeFilter === "Y" ? activeStyle : null}
          >
            Dòng Y
          </li>
          <li
            onClick={() => {
              filterProducts("S");
              handleFilter("S");
            }}
            style={activeFilter === "S" ? activeStyle : null}
          >
            Dòng S
          </li>
          <li
            onClick={() => {
              filterProducts("V");
              handleFilter("V");
            }}
            style={activeFilter === "V" ? activeStyle : null}
          >
            Dòng V
          </li>
          <li
            onClick={() => {
              filterProducts("U");
              handleFilter("U");
            }}
            style={activeFilter === "U" ? activeStyle : null}
          >
            Dòng U
          </li>
        </ul>
      </div>
      <div className="products-list-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.productsReducer.filterProducts,
});

export default connect(mapStateToProps, { filterProducts })(ProductsList);
