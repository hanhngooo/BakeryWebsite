import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./productCard.css";
import ProductModal from "../../components/Products/productModal";

function ProductCard(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card className="products__card">
        <div className="products__card--imgBox">
          <Card.Img
            className="products__card--img"
            variant="top"
            src={props.image}
            onClick={() => setModalShow(true)}
          />
        </div>
        <Card.Body>
          <Card.Title
            className="products__card--title"
            style={{ marginBottom: "0" }}
          >
            {props.name}{" "}
          </Card.Title>
        </Card.Body>
      </Card>
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        image={props.image}
        description={props.description}
      />
    </>
  );
}

export default ProductCard;
