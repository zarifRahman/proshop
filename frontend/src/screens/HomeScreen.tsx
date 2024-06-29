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
  category?: string;
}

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { keyword } = useParams<{ keyword: string }>();
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('desc');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products');
        setProducts(data);
        console.log(data)
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
    if (products.length > 0) {
      const uniqueCategories:any = Array.from(new Set(products.map(product => product.category)));
      setCategories(uniqueCategories);
    }
  }, [products]);

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
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold">All Products</h1>
            
            <div>
              <>
                <label htmlFor="categorySelect" className="mr-2 font-bold">Filter by Category:</label>
                <select
                  id="categorySelect"
                  className="px-3 py-2 border border-black rounded"
                  onChange={(e) => {
                    const selectedCategory = e.target.value;
                    if (selectedCategory === 'all') {
                      setFilteredProducts(products);
                    } else {
                      const filtered = products?.filter(product => product?.category === selectedCategory);
                      setFilteredProducts(filtered);
                    }
                  }}
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </>
              <div className="inline-flex sm:flex-row ml-3">
                <button
                  className={`px-3 py-2 border border-black rounded-l-full text-sm ${
                    sortOrder === 'asc' ? 'bg-[rgba(60,76,93,1)] text-white' : 'bg-white text-black opacity-50'
                  }`}
                  onClick={() => handleSortChange('asc')}
                >
                  Asc Sort
                </button>
                <button
                  className={`px-3 py-2 border border-black rounded-r-full ${
                    sortOrder === 'desc' ? 'bg-[rgba(60,76,93,1)] text-white' : 'bg-white text-black opacity-50'
                  }`}
                  onClick={() => handleSortChange('desc')}
                >
                  Desc Sort
                </button>
              </div>
            </div>
            
          </div>
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
