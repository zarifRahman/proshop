import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from 'axios'
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

const HomeScreen = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { keyword } = useParams();


  useEffect(()=> {
    const fetchProducts = async () => {
      try {
        const {data} = await axios.get('http://localhost:5000/api/products');        
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('error---',error);
        setLoading(false)
      }
    }
    fetchProducts();

  },[]);

  // ---
  const filteredProducts = keyword
    ? products.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : products;

  return (
    <>
    {loading ? (
        <Loader />
      ) : (
      <>
        <h1>latest products</h1>
        <Row>
          {filteredProducts?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>)
    }
    </>
  );
};

export default HomeScreen;
