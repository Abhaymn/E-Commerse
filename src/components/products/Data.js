import React from "react";
import { Button } from "react-bootstrap";
import Card from "./Card";
import classes from "./Store.module.css";

const productsArr = [
  {
    id: "1",
    title: "ALBUM 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "2",
    title: "ALBUM 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "3",
    title: "ALBUM 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "4",
    title: "ALBUM 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Data = (props) => {
  const productList = productsArr.map((product) => {
    return (
      <div className="col col-6">
        <Card
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl}
          key={product.id}
          id={product.id}
        />
      </div>
    );
  });
  return (
    <section>
      <div className="text-center">
        <h2 className="fw-bold mt-4 pb-5">MUSIC</h2>
      </div>
      <div>
        <div className={`row ${classes["space-item"]}`}>{productList}</div>
      </div>
      <div className="text-center">
        <Button variant="secondary" size="lg" className="btn btn-sm fw-bold">
          See the Cart
        </Button>
      </div>
    </section>
  );
};

export default Data;