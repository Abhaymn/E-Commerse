import React from "react";
import { Table, Card, Button, CloseButton } from "react-bootstrap";
const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <Card style={{ width: "22rem", float: "right" }}>
      <Card.Body>
        <div className="text-end">
          <CloseButton onClick={props.onCloseCart} />
        </div>

        <Card.Title className="text-center">Cart</Card.Title>
        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartElements.map((cartitem) => {
                return (
                  <tr key={cartitem.title}>
                    <td>{cartitem.title}</td>
                    <td>{cartitem.price}</td>
                    <td>{cartitem.quantity}</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <h5 className="text-end">Total $0</h5>
        <Button variant="primary">Purchase</Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;

