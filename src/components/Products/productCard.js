import React from "react";
import { Card } from "react-bootstrap";
import "./productCard.css";

function ProductCard(props) {
  return (
    <Card className="products__card">
      <div className="products__card--imgBox">
        <Card.Img
          className="products__card--img"
          variant="top"
          src={props.image}
        />
      </div>
      <Card.Body>
        <Card.Title className="products__card--title">{props.name} </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
