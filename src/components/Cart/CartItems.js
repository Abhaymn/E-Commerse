import { React, useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  let userEmail;
  if (localStorage.getItem('tokenId')) {
    userEmail = JSON.parse(localStorage.getItem('tokenId')).email;
    userEmail = userEmail.replace(/[@.]/g, '');
  }

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


  const purchaseHandler = () => {

    CartOrderContext.items.forEach(async (item) => {
      try {
        await fetch(
          `https://crudcrud.com/api/3c149a125b4442ea87b13a66d6b8b6c3/cartItem  ${userEmail}/${item._id}`,
          {
            method: 'POST',
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    });

    CartOrderContext.purchased=(purchaseHandler);
  };

  return (
    <>
      <table className="table table-hover text-center p-2">
        <thead>
          <tr>
            <th scope="col">ITEM</th>
            <th scope="col">PRICE</th>
            <th scope="col">QUANTITY</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {CartOrderContext.items.map((cartitem) => {
            return (
              <tr key={cartitem.id}>
                <td className="pe-2">
                  <img
                    src={`${cartitem.imageUrl}`}
                    className="img-fluid rounded"
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
          Total :<span className="mx-2 ">${totalamnt}</span>
        </p>
      </div>
      <div className="text-center">
        <Button variant="primary" onClick={purchaseHandler}>PURCHASE</Button>
      </div>
    </>
  );
};

export default CartItem;