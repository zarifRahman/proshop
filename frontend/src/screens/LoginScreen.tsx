import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state: any) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      if (typeof err === 'object' && err !== null) {
        toast.error((err as any)?.data?.message || (err as any)?.error || 'An error occurred');
      } else {
        toast.error('An error occurred');
      }
    }
  };

  return (
    <FormContainer>
      <Row className='justify-content-center pt-36'>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title className='text-center'>Sign In</Card.Title>
              <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='username'>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type='username'
                    placeholder='Enter username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className='my-2' controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button disabled={isLoading} type='submit' variant='primary'>
                  Sign In
                </Button>

                {isLoading && <Loader />}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
