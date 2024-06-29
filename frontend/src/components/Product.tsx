import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

interface ProductProps {
  product: {
    id: number;
    image: string;
    title: string;
    rating: {
      rate: number;
      count: number;
    };
    price: number;
  };
}

const Product: FC<ProductProps> = ({ product }:any) => {
  console.log({product})
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product.id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.title}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <Rating
            value={product?.rating?.rate}
            text={`${product?.rating?.count} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product?.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
