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
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=> {
    const fetchProducts = async () => {
      try {
        const {data} = await axios.get('https://fakestoreapi.com/products'); 
        setProducts(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchProducts();

  },[]);

  useEffect(() => {
    if (keyword) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [keyword, products]);

  return (
    <>
    {loading ? (
        <Loader />
      ) : (
      <>
        <h1>latest products</h1>
        <Row>
          {filteredProducts?.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
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
