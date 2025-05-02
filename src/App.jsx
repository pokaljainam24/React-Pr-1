import { useState, useEffect } from 'react';
import './App.css';
import img from '../public/nikejoeden.png';
import img2 from '../public/air-jordan-1.webp';
import img3 from '../public/img-3.webp';
import img4 from '../public/img-4.jpg';
import img5 from '../public/img-5.jpg';

function App() {
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')) || 0);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src={img} className="card-img-top product-image" alt="Nike Air Jordan Green" />
              <div className="card-body">
                <div className="row g-2">
                  <div className="col-3">
                    <img src={img2} className="img-thumbnail product-thumb" alt="Side View" />
                  </div>
                  <div className="col-3">
                    <img src={img3} className="img-thumbnail product-thumb" alt="Back View" />
                  </div>
                  <div className="col-3">
                    <img src={img4} className="img-thumbnail product-thumb" alt="Top View" />
                  </div>
                  <div className="col-3">
                    <img src={img5} className="img-thumbnail product-thumb" alt="Angled View" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h1 className="h2 mb-3 text-start">Nike Air Jordan 1 - Green Edition</h1>
            <div className="mb-3 text-start">
              <span className="h4 me-2 fw-bold">$189.99</span>
              <span className="text-light text-decoration-line-through">$219.99</span>
              <span className="badge bg-danger ms-2">14% OFF</span>
            </div>

            <div className="mb-3">
              <div className="d-flex align-items-center">
                <div className="text-warning me-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-light">(256 reviews)</span>
              </div>
            </div>

            <p className="mb-4 text-start">
              The Nike Air Jordan 1 Green Edition combines classic style with fresh color. Crafted with premium materials,
              this iconic sneaker delivers all-day comfort and a bold look.
            </p>

            <div className="mb-4 text-start">
              <h6 className="mb-2">Available Colors</h6>
              <div className="btn-group" role="group">
                <input type="radio" className="btn-check" name="color" id="green" defaultChecked />
                <label className="btn btn-outline-secondary" htmlFor="green">Green</label>
                <input type="radio" className="btn-check" name="color" id="red" />
                <label className="btn btn-outline-secondary" htmlFor="red">Red</label>
                <input type="radio" className="btn-check" name="color" id="blue" />
                <label className="btn btn-outline-secondary" htmlFor="blue">Blue</label>
              </div>
            </div>

            <div className="mb-2">
              <div className="d-flex align-items-center">
                <label className="me-2">Quantity:</label>
                <button className="btn btn-outline-secondary me-2" onClick={handleDecrement}>-</button>
                <span className="mx-2">{count}</span>
                <button className="btn btn-outline-secondary ms-2" onClick={handleIncrement}>+</button>
              </div>
            </div>

            <div className="mb-2">
              <div className="d-flex align-items-center">
                <label className="me-2">Reset:</label>
                <button className="btn btn-outline-secondary ms-2" onClick={handleReset}>Reset</button>
              </div>
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button">Add to Cart</button>
              <button className="btn btn-outline-secondary" type="button">
                <i className="far fa-heart me-2"></i>Add to Wishlist
              </button>
            </div>

            <div className="mt-2">
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-truck text-primary me-2"></i>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-undo text-primary me-2"></i>
                <span>30-day return policy</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-shield-alt text-primary me-2"></i>
                <span>1-year manufacturer warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
