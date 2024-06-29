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
        <div className="mb-3 inline-flex">
          <button
            className={`px-4 py-2 rounded-l-full ${
              sortOrder === 'asc' ? 'bg-blue-500 text-black opacity-50' : 'bg-[rgba(60,76,93,1)] text-black'
            }`}
            onClick={() => handleSortChange('asc')}
          >
            Sort Ascending
          </button>
          <button
            className={`px-4 py-2 rounded-r-full ${
              sortOrder === 'desc' ? 'bg-blue-500 text-black opacity-50' : 'bg-[rgba(60,76,93,1)] text-black'
            }`}
            onClick={() => handleSortChange('desc')}
          >
            Sort Descending
          </button>
        </div>
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
