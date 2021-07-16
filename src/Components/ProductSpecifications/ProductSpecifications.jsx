import React from "react";
import "./ProductSpecifications.scss";
import { useLocation } from "react-router";

const ProductSpecifications = () => {
  const { state } = useLocation();
  const { sim, pin, os, frontCam, backCam, screen, insideMemory, ram } = state;
  return (
    <div>
      <div className="product-detail__technicalSpecifications">
        <h3>Thông số kỹ thuật</h3>
        <table>
          <tr>
            <td>Màn hình</td>
            <td>{screen}</td>
          </tr>
          <tr>
            <td>Hệ điều hành</td>
            <td>{os}</td>
          </tr>
          <tr>
            <td>Camera trước</td>
            <td>{frontCam}</td>
          </tr>
          <tr>
            <td>Camera sau</td>
            <td>{backCam}</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>{ram}</td>
          </tr>
          <tr>
            <td>Bộ nhớ trong</td>
            <td>{insideMemory}</td>
          </tr>
          <tr>
            <td>SIM</td>
            <td>{sim}</td>
          </tr>
          <tr>
            <td>Pin</td>
            <td>{pin}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductSpecifications;
