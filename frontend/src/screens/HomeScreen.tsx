import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { keyword } = useParams<{ keyword: string }>();
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('desc');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

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
    const fetchProductsSorted = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products?sort=${sortOrder}`);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching sorted products:', error);
      }
    };
    fetchProductsSorted();
  }, [sortOrder]);

  const handleSortChange = (order: string) => {
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
            {filteredProducts.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
