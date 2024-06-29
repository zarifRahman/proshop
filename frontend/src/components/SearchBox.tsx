import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const SearchBox: React.FC = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams<any>();

  const [keyword, setKeyword] = useState<string>(urlKeyword || '');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      />
      <Button type='submit' variant='outline-success' className='p-2 mx-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
