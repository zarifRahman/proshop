import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from 'axios'
import Loader from '../components/Loader';

const HomeScreen = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

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

  return (
    <>
    {loading ? ( // Render loader if loading is true
        <Loader />
      ) : (
      <>
        <h1>latest products</h1>
        <Row>
          {products?.map((product) => (
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
