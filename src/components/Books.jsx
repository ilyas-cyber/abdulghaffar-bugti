import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Plus, Minus, Trash2, X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const Books = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    getPKRTotal,
    getUSDTotal,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState('cart'); // cart, checkout, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'easypaisa', // easypaisa, bank
  });

  const booksList = [
    {
      id: 'book-1',
      title: 'The Quest for Resource Justice in Balochistan',
      subtitle: 'Critical essays on gas extraction and regional development policies.',
      category: 'Political Economy',
      pricePKR: 1200,
      priceUSD: 10.00,
      coverGradient: 'linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)', // Deep purple
      pages: 280,
      published: '2025'
    },
    {
      id: 'book-2',
      title: 'Dastar Vs Dastur: The Changing Tribal Landscape',
      subtitle: 'Exploring the transition of Baloch youth from hereditary codes to constitutional law.',
      category: 'Sociology & Law',
      pricePKR: 1500,
      priceUSD: 12.00,
      coverGradient: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)', // Deep blue
      pages: 310,
      published: '2026'
    },
    {
      id: 'book-3',
      title: 'Echoes of Pirkoh: Folk and Resistance Stories',
      subtitle: 'A compilation of folklore, Nar Sur flute archives, and progressive street theatre scripts.',
      category: 'Literature & Art',
      pricePKR: 1000,
      priceUSD: 8.00,
      coverGradient: 'linear-gradient(135deg, #78350f 0%, #451a03 100%)', // Warm brown/amber
      pages: 220,
      published: '2024'
    },
    {
      id: 'book-4',
      title: 'Literature as a Hammer: The Progressive Legacy',
      subtitle: 'Understanding the role of the Progressive Writers Association in Pakistan\'s social movements.',
      category: 'Literary Criticism',
      pricePKR: 1400,
      priceUSD: 11.00,
      coverGradient: 'linear-gradient(135deg, #881337 0%, #4c0519 100%)', // Deep crimson/berry
      pages: 260,
      published: '2025'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill out all required shipping fields.');
      return;
    }
    setCheckoutStep('success');
  };

  const handleSuccessClose = () => {
    clearCart();
    setCheckoutStep('cart');
    setIsCartOpen(false);
  };

  return (
    <section id="books" className="section books-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Publications & Bookstore</h2>
          <p className="section-subtitle">
            Purchase Abdul Ghaffar Bugti\'s books to explore deep sociological studies of Balochistan. All proceeds from the store directly support Lok Manch Collective rights activism and girls education projects.
          </p>
        </div>

        <div className="grid-2 books-grid">
          {booksList.map((book) => (
            <div key={book.id} className="card book-card animate-fade-in">
              <div className="book-layout-split">
                {/* 3D Styled Book Cover directly in CSS */}
                <div className="book-cover-container">
                  <div className="book-3d-cover" style={{ backgroundImage: book.coverGradient }}>
                    <div className="book-spine-shine"></div>
                    <div className="book-content-overlay">
                      <span className="book-cover-category">{book.category}</span>
                      <h4 className="book-cover-title">{book.title}</h4>
                      <p className="book-cover-author">Abdul Ghaffar Bugti</p>
                    </div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="book-details-wrap">
                  <span className="book-details-category">{book.category}</span>
                  <h3 className="book-details-title">{book.title}</h3>
                  <p className="book-details-subtitle">{book.subtitle}</p>
                  
                  <div className="book-specs">
                    <span><strong>Pages:</strong> {book.pages}</span>
                    <span><strong>Published:</strong> {book.published}</span>
                  </div>

                  <div className="book-prices-container">
                    <div className="price-tag local-price">
                      <span className="currency-label">PKR</span>
                      <span className="currency-amount">{book.pricePKR.toLocaleString()}</span>
                    </div>
                    <div className="price-divider"></div>
                    <div className="price-tag int-price">
                      <span className="currency-label">USD</span>
                      <span className="currency-amount">${book.priceUSD.toFixed(2)}</span>
                    </div>
                  </div>

                  <button onClick={() => addToCart(book)} className="btn btn-primary btn-add-cart">
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sliding Drawer Overlay */}
      {isCartOpen && (
        <div className="cart-drawer-overlay animate-fade-in" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h3 className="drawer-title">Shopping Cart ({cartCount} items)</h3>
              <button className="drawer-close-btn" onClick={() => setIsCartOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Cart steps (Cart items / Checkout form / Success confirmation) */}
            {checkoutStep === 'cart' && (
              <>
                {cartItems.length > 0 ? (
                  <div className="drawer-body-wrap">
                    <div className="cart-items-list">
                      {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                          <div className="cart-item-info">
                            <h4 className="cart-item-title">{item.title}</h4>
                            <div className="cart-item-prices">
                              <span className="cart-item-pkr">PKR {item.pricePKR.toLocaleString()}</span>
                              <span>/</span>
                              <span className="cart-item-usd">${item.priceUSD.toFixed(2)}</span>
                            </div>
                          </div>

                          <div className="cart-item-actions">
                            <div className="quantity-controls">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="q-btn">
                                <Minus size={12} />
                              </button>
                              <span className="q-val">{item.quantity}</span>
                              <button onClick={() => addToCart(item)} className="q-btn">
                                <Plus size={12} />
                              </button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="delete-item-btn" title="Delete Item">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="cart-drawer-footer">
                      <div className="cart-totals-breakdown">
                        <div className="total-row">
                          <span>Local Total:</span>
                          <span className="pkr-total-val">PKR {getPKRTotal().toLocaleString()}</span>
                        </div>
                        <div className="total-row">
                          <span>International Total:</span>
                          <span className="usd-total-val">${getUSDTotal().toFixed(2)}</span>
                        </div>
                      </div>
                      <button onClick={() => setCheckoutStep('checkout')} className="btn btn-primary btn-checkout-trigger">
                        Proceed to Checkout <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="empty-cart-drawer">
                    <ShoppingCart size={48} className="empty-cart-icon" />
                    <p>Your shopping cart is empty.</p>
                    <button onClick={() => setIsCartOpen(false)} className="btn btn-secondary">Continue Shopping</button>
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'checkout' && (
              <form onSubmit={handleCheckoutSubmit} className="checkout-form-wrap">
                <div className="checkout-body">
                  <h4 className="form-section-title">Shipping & Billing Details</h4>
                  
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. johndoe@gmail.com"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone/Mobile *</label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. +92 300 1234567"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Shipping Address *</label>
                    <textarea
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Street, City, Postal Code, Country"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Payment Channel *</label>
                    <div className="payment-select-grid">
                      <label className={`payment-option-label ${formData.paymentMethod === 'easypaisa' ? 'selected-payment' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="easypaisa"
                          checked={formData.paymentMethod === 'easypaisa'}
                          onChange={handleInputChange}
                          className="payment-radio"
                        />
                        Local (Easypaisa)
                      </label>
                      <label className={`payment-option-label ${formData.paymentMethod === 'bank' ? 'selected-payment' : ''}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank"
                          checked={formData.paymentMethod === 'bank'}
                          onChange={handleInputChange}
                          className="payment-radio"
                        />
                        Int. Bank Transfer
                      </label>
                    </div>
                  </div>
                </div>

                <div className="cart-drawer-footer">
                  <div className="checkout-summary-row">
                    <span>Total Due:</span>
                    <strong>
                      {formData.paymentMethod === 'easypaisa'
                        ? `PKR ${getPKRTotal().toLocaleString()}`
                        : `$${getUSDTotal().toFixed(2)}`}
                    </strong>
                  </div>
                  <div className="checkout-actions-row">
                    <button type="button" onClick={() => setCheckoutStep('cart')} className="btn btn-secondary">
                      Back to Cart
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="checkout-success-view">
                <CheckCircle size={56} className="success-icon-check" />
                <h3 className="success-title-main">Order Successfully Placed!</h3>
                <p className="success-desc">
                  Thank you for purchasing! Your order reference is <strong>#ABG-{Math.floor(100000 + Math.random() * 900000)}</strong>.
                </p>

                <div className="instruction-box-success">
                  <h4 className="instruction-title">How to Complete Your Purchase:</h4>
                  <p>As this is a self-publishing portal to avoid credit card fee cuts, please complete the manual transfer:</p>
                  
                  {formData.paymentMethod === 'easypaisa' ? (
                    <div className="success-account-details">
                      <p><strong>Easypaisa Account Name:</strong> Abdul Ghaffar</p>
                      <p><strong>Easypaisa Account Number:</strong> 03424068601</p>
                      <p><strong>Total Amount:</strong> PKR {getPKRTotal().toLocaleString()}</p>
                    </div>
                  ) : (
                    <div className="success-account-details">
                      <p><strong>Bank Name:</strong> MCB Bank Limited</p>
                      <p><strong>Account Title:</strong> Abdul Ghaffar Bugti</p>
                      <p><strong>IBAN:</strong> PK29MUCB1658813331002802</p>
                      <p><strong>Swift Code / Branch Code:</strong> MUCBPKKA / 8013</p>
                      <p><strong>Branch Address:</strong> Fazal-ul-Haq Road, Islamabad</p>
                      <p><strong>Total Amount:</strong> USD ${getUSDTotal().toFixed(2)}</p>
                    </div>
                  )}

                  <div className="warning-notice-success">
                    <ShieldCheck size={18} />
                    <span>Please make the payment, copy the Transaction ID or Screenshot, and submit it on the <strong>Donation/Verification Portal</strong> at the bottom of the page to verify your shipping order.</span>
                  </div>
                </div>

                <button onClick={handleSuccessClose} className="btn btn-primary btn-success-close">
                  Got It
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .books-section {
          background-color: var(--bg-card);
          transition: background-color var(--transition-normal);
        }

        .book-card {
          padding: 2.25rem;
        }

        .book-layout-split {
          display: flex;
          gap: 2rem;
          align-items: start;
        }

        /* 3D Book Cover Graphic */
        .book-cover-container {
          perspective: 1000px;
          flex-shrink: 0;
        }

        .book-3d-cover {
          width: 170px;
          height: 240px;
          border-radius: 4px 12px 12px 4px;
          box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.25);
          position: relative;
          transform: rotateY(-10deg);
          transform-style: preserve-3d;
          transition: transform var(--transition-normal);
          overflow: hidden;
          padding: 1.5rem 1rem;
        }

        .book-card:hover .book-3d-cover {
          transform: rotateY(-2deg) translateZ(5px);
        }

        .book-spine-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 12px;
          height: 100%;
          background: linear-gradient(to right, 
            rgba(255, 255, 255, 0.15) 0%, 
            rgba(0, 0, 0, 0.1) 40%, 
            rgba(255, 255, 255, 0.05) 60%, 
            rgba(0,0,0,0.3) 100%);
          border-right: 1px solid rgba(255,255,255,0.05);
        }

        .book-content-overlay {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          color: #ffffff;
        }

        .book-cover-category {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.75;
        }

        .book-cover-title {
          font-family: var(--font-title);
          font-size: 1.05rem;
          line-height: 1.3;
          font-weight: 700;
          margin-top: 1rem;
          margin-bottom: auto;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .book-cover-author {
          font-size: 0.75rem;
          font-weight: 600;
          opacity: 0.85;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 0.5rem;
        }

        /* Book details */
        .book-details-wrap {
          display: flex;
          flex-direction: column;
          height: 100%;
          flex-grow: 1;
        }

        .book-details-category {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }

        .book-details-title {
          font-size: 1.4rem;
          line-height: 1.25;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .book-details-subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .book-specs {
          display: flex;
          gap: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        }

        .book-prices-container {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.75rem;
        }

        .price-tag {
          display: flex;
          flex-direction: column;
        }

        .currency-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .currency-amount {
          font-family: var(--font-title);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.1;
        }

        .price-divider {
          width: 1px;
          height: 30px;
          background-color: var(--border-color);
        }

        .btn-add-cart {
          margin-top: auto;
          width: fit-content;
        }

        /* Cart Sliding Drawer */
        .cart-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(2px);
          z-index: 3000;
        }

        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 480px;
          background-color: var(--bg-card);
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);
          z-index: 3100;
          display: flex;
          flex-direction: column;
          animation: slideLeft var(--transition-normal) forwards;
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .cart-drawer-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .drawer-title {
          font-size: 1.15rem;
          font-weight: 700;
        }

        .drawer-close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 50%;
        }

        .drawer-close-btn:hover {
          background-color: var(--border-color);
          color: var(--text-main);
        }

        .drawer-body-wrap {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          overflow: hidden;
        }

        .cart-items-list {
          flex-grow: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: start;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
          gap: 1rem;
        }

        .cart-item-title {
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.25rem;
        }

        .cart-item-prices {
          display: flex;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .cart-item-pkr {
          font-weight: 600;
          color: var(--text-main);
        }

        .cart-item-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          overflow: hidden;
          background-color: var(--bg-color);
        }

        .q-btn {
          background: none;
          border: none;
          padding: 0.35rem 0.5rem;
          cursor: pointer;
          color: var(--text-muted);
        }

        .q-btn:hover {
          background-color: var(--border-color);
          color: var(--text-main);
        }

        .q-val {
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0 0.5rem;
          min-width: 20px;
          text-align: center;
        }

        .delete-item-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.35rem;
          border-radius: 6px;
        }

        .delete-item-btn:hover {
          color: var(--primary-color);
          background-color: rgba(var(--primary-color-hsl), 0.05);
        }

        .cart-drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--border-color);
          background-color: var(--bg-color);
        }

        .cart-totals-breakdown {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        .pkr-total-val, .usd-total-val {
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--text-main);
        }

        .btn-checkout-trigger {
          width: 100%;
        }

        .empty-cart-drawer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          padding: 3rem;
          text-align: center;
          height: 70%;
          color: var(--text-muted);
        }

        .empty-cart-icon {
          opacity: 0.3;
        }

        /* Checkout Form Styling */
        .checkout-form-wrap {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          overflow: hidden;
        }

        .checkout-body {
          flex-grow: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }

        .form-section-title {
          font-size: 1rem;
          margin-bottom: 1.25rem;
          color: var(--primary-color);
        }

        .payment-select-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .payment-option-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .payment-radio {
          accent-color: var(--primary-color);
        }

        .selected-payment {
          border-color: var(--primary-color);
          background-color: rgba(var(--primary-color-hsl), 0.04);
          color: var(--primary-color);
        }

        .checkout-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 1.05rem;
        }

        .checkout-summary-row strong {
          font-family: var(--font-title);
          font-size: 1.35rem;
          color: var(--primary-color);
        }

        .checkout-actions-row {
          display: flex;
          gap: 1rem;
        }

        .checkout-actions-row .btn {
          flex: 1;
        }

        /* Checkout Success page */
        .checkout-success-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.5rem;
          overflow-y: auto;
          flex-grow: 1;
          text-align: center;
        }

        .success-icon-check {
          color: #22c55e;
          margin-bottom: 1.5rem;
        }

        .success-title-main {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .success-desc {
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }

        .instruction-box-success {
          background-color: var(--bg-color);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: left;
          margin-bottom: 2rem;
          width: 100%;
        }

        .instruction-title {
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
          color: var(--text-main);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .success-account-details {
          background-color: var(--bg-card);
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin: 0.75rem 0;
          border: 1px solid var(--border-color);
        }

        .warning-notice-success {
          display: flex;
          gap: 0.75rem;
          align-items: start;
          font-size: 0.8rem;
          color: var(--accent-color);
          margin-top: 1rem;
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
          font-weight: 500;
        }

        .btn-success-close {
          width: 100%;
        }

        @media (max-width: 768px) {
          .book-layout-split {
            flex-direction: column;
            align-items: center;
          }
          .book-cover-container {
            margin-bottom: 1.5rem;
          }
          .book-details-wrap {
            align-items: center;
            text-align: center;
          }
          .book-specs {
            justify-content: center;
          }
          .btn-add-cart {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Books;
