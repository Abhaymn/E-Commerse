import { React, useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const CartOrderContext = useContext(CartContext);

  const removeItemHandler = (cartitem) => {
    CartOrderContext.removeItem(cartitem);
  };

  let totalamnt = 0;
  CartOrderContext.items.forEach((item) => {
    totalamnt = totalamnt + item.quantity * item.price;
  });
  totalamnt = totalamnt.toFixed(2);
  console.log(totalamnt);
  return (
    <>
      <table class="table table-hover text-center p-2">
        <thead>
          <tr>
            <th scope="col">ITEM</th>
            <th scope="col">PRICE</th>
            <th scope="col">QUANTITY</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {CartOrderContext.items.map((cartitem) => {
            return (
              <tr key={cartitem.id}>
                <td class="pe-2">
                  <img
                    src={`${cartitem.imageUrl}`}
                    class="img-fluid rounded"
                    alt="..."
                  />

                  {cartitem.title}
                </td>

                <td>{cartitem.price}</td>

                <td>{cartitem.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => removeItemHandler(cartitem)}
                  >
                    REMOVE
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className=" fw-bold text-muted text-end">
        <p>
          Total :<span class="mx-2 ">${totalamnt}</span>
        </p>
      </div>
      <div class="text-center">
        <Button variant="primary">BUY</Button>
      </div>
    </>
  );
};

export default CartItem;