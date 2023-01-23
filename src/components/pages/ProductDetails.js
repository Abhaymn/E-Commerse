import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    axios.get(`https://my-api/products/${id}`)
      .then(response => setProduct(response.data))
  }, [id]);
  
  if (!product) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
    </div>
  );
}
export default ProductDetails;