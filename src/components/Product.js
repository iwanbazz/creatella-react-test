import React, { Fragment } from "react";
import { formatCurrency, parseDateIntoRelativeTime } from "../common/utils";
import Ads from "./Ads";

function Product({ product, index }) {
  const faceSize = {
    fontSize: product.size + "px",
  };
  //console.log(product);
  return (
    <Fragment>
      <div className="col-md-3 mb-3 mt-3">
        <div className="card shadow-sm">
          <div className="product-face text-center" style={faceSize}>
            {product.face}
          </div>
          <div className="product-detail">
            <table>
              <tbody>
                <tr>
                  <td className="font-weight-bolder">Id</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{product.id}</td>
                </tr>
                <tr>
                  <td className="font-weight-bolder">Price</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{formatCurrency(product.price)}</td>
                </tr>
                <tr>
                  <td className="font-weight-bolder">Size</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{product.size} kb</td>
                </tr>
                <tr>
                  <td className="font-weight-bolder">Added</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{parseDateIntoRelativeTime(product.date)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {index > 0 && index % 20 === 0 && <Ads />}
    </Fragment>
  );
}

export default Product;
