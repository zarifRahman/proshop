import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { clearCartItems, saveShippingAddress } from '../slices/cartSlice';
import { toast } from 'react-toastify';

interface CartItem {
  id: number; 
  qty: number;
}

const ShippingScreen: React.FC = () => {
  const cart = useSelector((state: any) => state.cart);
  const { shippingAddress, cartItems } = cart;

  const [address, setAddress] = useState<string>(shippingAddress.address || '');
  const [city, setCity] = useState<string>(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState<string>(
    shippingAddress.postalCode || ''
  );
  const [country, setCountry] = useState<string>(shippingAddress.country || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));

    const products = cartItems?.map((item:CartItem) => ({
      productId: item.id,
      quantity: item.qty,
    }));

    try {
      const response = await fetch('https://fakestoreapi.com/carts', {
        method: "POST",
        body: JSON.stringify({
          date: new Date().toISOString().split('T')[0],
          products,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      toast.success('Shipping completed successfully!');
      dispatch(clearCartItems());
      navigate('/');
    } catch (error) {
      toast.error('Failed to update cart!');
    }
  };

  return (
    <FormContainer>
      <h1>Checkout</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='my-2' controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='my-2' controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='my-2' controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
