import BreadCrumb from "../Layouts/BreadCrumb";
import Button from "../Layouts/Button";
import Meta from "../Layouts/Meta";

import { ps4 } from "../assets";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={`Cart`} />
      <BreadCrumb path="Cart" />
      <div className="w-full h-full bg-[#f5f5f7] mt-4 py-16">
        <div className="container mx-auto px-4">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500  my-8">
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <img src={ps4} className="w-12" />
                      <div className="flex items-start gap-1 flex-col">
                        <span>Apple MacBook Pro 17</span>
                        <span>Size: L</span>
                        <span>Color: Blue</span>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">$599.8</td>
                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center gap-1 justify-between">
              <div className="w-36">
                <Button.Link to="/store">Keep Shopping</Button.Link>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-[500]">Subtotal:</span>
                  <span>$2999</span>
                </div>
                <Button.Link to="/checkout">Checkout</Button.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
