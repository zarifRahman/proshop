import { useEffect, useState } from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import Product from "../components/Product";
import axios from 'axios'
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

const HomeScreen = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { keyword } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortOrder, setSortOrder] = useState('desc');

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products?sort=${sortOrder}`);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [sortOrder]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <>
    {loading ? (
        <Loader />
      ) : (
      <>
        <ButtonGroup className="mb-3">
          <Button
            variant={sortOrder === 'asc' ? 'primary' : 'secondary'}
            onClick={() => handleSortChange('asc')}
          >
            Sort Ascending
          </Button>
          <Button
            variant={sortOrder === 'desc' ? 'primary' : 'secondary'}
            onClick={() => handleSortChange('desc')}
          >
            Sort Descending
          </Button>
        </ButtonGroup>
        <h1>All Products</h1>
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
