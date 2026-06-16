import React, { useState } from 'react';
import { Copy, Check, Info, ShieldCheck, Heart, FileText, Printer, CheckCircle } from 'lucide-react';

const Donate = () => {
  const [activeTab, setActiveTab] = useState('international');
  const [copiedField, setCopiedField] = useState(null);
  
  // Form and receipt state
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    amount: '',
    currency: 'USD',
    transactionId: '',
    cause: 'women-rights',
    notes: '',
  });
  const [receipt, setReceipt] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, fieldId) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmitVerification = (e) => {
    e.preventDefault();
    if (!formData.donorName || !formData.email || !formData.amount || !formData.transactionId) {
      alert('Please fill out all required verification fields.');
      return;
    }
    
    // Generate simulated receipt
    const simulatedReceipt = {
      receiptNo: `REC-2026-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      ...formData
    };
    setReceipt(simulatedReceipt);
  };

  const resetForm = () => {
    setFormData({
      donorName: '',
      email: '',
      amount: '',
      currency: 'USD',
      transactionId: '',
      cause: 'women-rights',
      notes: '',
    });
    setReceipt(null);
  };

  const causesInfo = {
    'women-rights': 'Women\'s Rights & Economic Empowerment',
    'girls-education': 'Primary & Secondary Education for Rural Girls',
    'lok-manch-theatre': 'Lok Manch Street Theatre & Conscientization',
    'climate-justice': 'Clean Water & Climate Justice in Pirkoh/Dera Bugti',
  };

  return (
    <section id="donate" className="section donate-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">Support the Activism</h2>
          <p className="section-subtitle">
            Empower rural women, fund street theatre programs, and support campaigns fighting resource exploitation in Balochistan. Choose a local or international transfer method below.
          </p>
        </div>

        <div className="donate-grid">
          {/* Payment Details Column */}
          <div className="donate-details-panel">
            <div className="donate-tabs">
              <button
                onClick={() => setActiveTab('international')}
                className={`donate-tab-btn ${activeTab === 'international' ? 'active-donate-tab' : ''}`}
              >
                International NGOs (Bank Transfer)
              </button>
              <button
                onClick={() => setActiveTab('local')}
                className={`donate-tab-btn ${activeTab === 'local' ? 'active-donate-tab' : ''}`}
              >
                Local Donations (Easypaisa / JazzCash)
              </button>
            </div>

            <div className="card payment-info-card animate-fade-in" key={activeTab}>
              {activeTab === 'international' ? (
                <div>
                  <h3 className="payment-heading">International Bank Wire Details</h3>
                  <p className="payment-intro">
                    Ideal for international NGOs, human rights networks, and global supporters. Use these details to execute SWIFT or wire transfers.
                  </p>

                  <div className="details-list">
                    <div className="detail-row">
                      <span className="detail-label">Bank Name</span>
                      <div className="detail-value-wrap">
                        <span className="detail-value">MCB Bank Limited</span>
                      </div>
                    </div>

                    <div className="detail-row">
                      <span className="detail-label">Account Title</span>
                      <div className="detail-value-wrap">
                        <span className="detail-value">Abdul Ghaffar Bugti</span>
                        <button onClick={() => handleCopy('Abdul Ghaffar Bugti', 'title')} className="copy-btn">
                          {copiedField === 'title' ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>

                    <div className="detail-row">
                      <span className="detail-label">IBAN (Account Number)</span>
                      <div className="detail-value-wrap">
                        <span className="detail-value ibanspan">PK29MUCB1658813331002802</span>
                        <button onClick={() => handleCopy('PK29MUCB1658813331002802', 'iban')} className="copy-btn">
                          {copiedField === 'iban' ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>

                    <div className="detail-row">
                      <span className="detail-label">SWIFT Code</span>
                      <div className="detail-value-wrap">
                        <span className="detail-value">MUCBPKKAXXX</span>
                        <button onClick={() => handleCopy('MUCBPKKAXXX', 'swift')} className="copy-btn">
                          {copiedField === 'swift' ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>

                    <div className="detail-row">
                      <span className="detail-label">Branch & Address</span>
                      <div className="detail-value-wrap">
                        <span className="detail-value">Dera Bugti Branch, Balochistan, Pakistan</span>
                      </div>
                    </div>
                  </div>

                  <div className="info-alert-box">
                    <Info size={16} />
                    <span>Please request your bank to execute the transfer as a "donation to civil society initiatives" to ensure swift regulatory clearing.</span>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="payment-heading">Local Mobile Wallet Channels</h3>
                  <p className="payment-intro">
                    Best suited for local Pakistani donors, Progressive Writers Association members, and community supporters wishing to send contributions in PKR.
                  </p>

                  <div className="details-list">
                    {/* Easypaisa details */}
                    <div className="wallet-channel-box">
                      <h4 className="wallet-name easypaisa-color">Easypaisa Channel</h4>
                      <div className="wallet-details-grid">
                        <div className="detail-row">
                          <span className="detail-label">Account Title</span>
                          <div className="detail-value-wrap">
                            <span className="detail-value">Abdul Ghaffar</span>
                          </div>
                        </div>
                        <div className="detail-row">
                          <span className="detail-label">Mobile Number</span>
                          <div className="detail-value-wrap">
                            <span className="detail-value">03424068601</span>
                            <button onClick={() => handleCopy('03424068601', 'ep-num')} className="copy-btn">
                              {copiedField === 'ep-num' ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Form Verification Column */}
          <div className="donate-form-panel">
            <div className="card form-card">
              <h3 className="form-card-title">Report & Verify Your Transfer</h3>
              <p className="form-card-subtitle">
                After making your transfer (or buying a book), please fill out this form. This helps us audit incoming NGO funding, allocate money to the correct cause, and generate your tax-exempt receipt.
              </p>

              <form onSubmit={handleSubmitVerification} className="donation-verify-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">NGO / Donor Name *</label>
                    <input
                      type="text"
                      name="donorName"
                      required
                      value={formData.donorName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. Global Women Foundation"
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
                      placeholder="e.g. finance@ngo.org"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Amount Transferred *</label>
                    <input
                      type="number"
                      name="amount"
                      required
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. 500"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Currency *</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleInputChange}
                      className="form-input select-input"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="PKR">PKR (₨)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Transaction ID / Reference Number *</label>
                  <input
                    type="text"
                    name="transactionId"
                    required
                    value={formData.transactionId}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter bank wire reference or Easypaisa TID"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Allocate to Cause *</label>
                  <select
                    name="cause"
                    value={formData.cause}
                    onChange={handleInputChange}
                    className="form-input select-input"
                  >
                    <option value="women-rights">Women Empowerment Programs</option>
                    <option value="girls-education">Primary Girls Mobile Schools</option>
                    <option value="lok-manch-theatre">Lok Manch Street Theatre Campaigns</option>
                    <option value="climate-justice">Clean Water Infrastructure (Pirkoh/Sui)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Message / Special Instructions</label>
                  <textarea
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Specify if this is for a book purchase, or add notes for the Lok Manch Collective audit team."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit-verify">
                  <ShieldCheck size={18} /> Submit Transfer Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Receipt Modal Overlay */}
      {receipt && (
        <div className="modal-overlay animate-fade-in" onClick={() => setReceipt(null)}>
          <div className="receipt-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="receipt-badge-header">
              <CheckCircle size={48} className="success-icon" />
              <h3>Submission Verified</h3>
              <p>Receipt Generated Successfully</p>
            </div>

            {/* Simulated Receipt details styled as a paper slip */}
            <div className="receipt-paper">
              <div className="receipt-header-branding">
                <span className="brand-main">LOK MANCH COLLECTIVE</span>
                <span className="brand-sub">Civil Rights & Development Initiative</span>
                <span className="audit-tag">Audited & Transparent Funding</span>
              </div>

              <div className="receipt-fields-grid">
                <div className="r-field">
                  <span className="rf-lbl">Receipt Number</span>
                  <span className="rf-val highlight-ref">{receipt.receiptNo}</span>
                </div>
                <div className="r-field">
                  <span className="rf-lbl">Date generated</span>
                  <span className="rf-val">{receipt.date}</span>
                </div>
                <div className="r-field">
                  <span className="rf-lbl">Donor / NGO Title</span>
                  <span className="rf-val">{receipt.donorName}</span>
                </div>
                <div className="r-field">
                  <span className="rf-lbl">Donor Email</span>
                  <span className="rf-val">{receipt.email}</span>
                </div>
                <div className="r-field">
                  <span className="rf-lbl">Transaction Reference ID</span>
                  <span className="rf-val font-mono">{receipt.transactionId}</span>
                </div>
                <div className="r-field">
                  <span className="rf-lbl">Fund Allocation Cause</span>
                  <span className="rf-val">{causesInfo[receipt.cause]}</span>
                </div>
              </div>

              <div className="receipt-amount-box">
                <span className="ramt-lbl">VERIFIED AMOUNT</span>
                <span className="ramt-val">{receipt.currency} {Number(receipt.amount).toLocaleString()}</span>
              </div>

              <div className="receipt-footer-text">
                <p>Status: <strong>Pending Reconciliation</strong> (audited in 24 hours).</p>
                <p className="legal-disclaimer">Thank you for standing in solidarity with the women and communities of Balochistan. Your funding keeps local activism alive.</p>
              </div>
            </div>

            <div className="receipt-actions-buttons">
              <button onClick={() => window.print()} className="btn btn-secondary r-act-btn">
                <Printer size={16} /> Print Receipt
              </button>
              <button onClick={resetForm} className="btn btn-primary r-act-btn">
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .donate-section {
          background-color: var(--bg-color);
          transition: background-color var(--transition-normal);
        }

        .donate-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        .donate-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 0.35rem;
          border-radius: 10px;
        }

        .donate-tab-btn {
          border: none;
          background: none;
          padding: 0.8rem;
          border-radius: 8px;
          cursor: pointer;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .active-donate-tab {
          background-color: var(--primary-color);
          color: #ffffff;
        }

        .payment-info-card {
          padding: 2.5rem;
        }

        .payment-heading {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .payment-intro {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .details-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .detail-row {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid var(--border-color);
        }

        .detail-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .detail-label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .detail-value-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .detail-value {
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--text-main);
          word-break: break-all;
        }

        .ibanspan {
          font-family: var(--font-sans);
          letter-spacing: 0.02em;
        }

        .copy-btn {
          background: none;
          border: 1px solid var(--border-color);
          padding: 0.4rem;
          border-radius: 6px;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .copy-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          background-color: rgba(var(--primary-color-hsl), 0.05);
        }

        .copied-icon {
          color: #22c55e;
        }

        .info-alert-box {
          display: flex;
          gap: 0.75rem;
          align-items: start;
          padding: 1rem;
          background-color: var(--bg-color);
          border-radius: 8px;
          border: 1px solid var(--border-color);
          margin-top: 2rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .info-alert-box span {
          flex: 1;
        }

        /* Mobile Wallet Channels */
        .wallet-channel-box {
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }

        .wallet-name {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .easypaisa-color {
          color: #00cc66;
        }

        .jazzcash-color {
          color: #e60000;
        }

        .wallet-details-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Verification Form Card */
        .form-card {
          padding: 2.5rem;
        }

        .form-card-title {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .form-card-subtitle {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .donation-verify-form {
          display: flex;
          flex-direction: column;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .select-input {
          cursor: pointer;
        }

        .btn-submit-verify {
          margin-top: 1rem;
          width: 100%;
        }

        /* Receipt Modal Styles */
        .receipt-modal-content {
          background-color: var(--bg-card);
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          animation: slideUp var(--transition-normal) forwards;
        }

        .receipt-badge-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .success-icon {
          color: #22c55e;
          margin-bottom: 0.5rem;
        }

        .receipt-badge-header h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .receipt-badge-header p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        /* Slip Paper simulation */
        .receipt-paper {
          background-color: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 2rem;
          position: relative;
          margin-bottom: 2rem;
        }

        .receipt-header-branding {
          text-align: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px dashed var(--border-color);
          padding-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }

        .brand-main {
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--text-main);
          letter-spacing: 0.05em;
        }

        .brand-sub {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .audit-tag {
          font-size: 0.65rem;
          color: var(--primary-color);
          font-weight: 700;
          margin-top: 0.25rem;
          text-transform: uppercase;
        }

        .receipt-fields-grid {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .r-field {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          gap: 1rem;
        }

        .rf-lbl {
          color: var(--text-muted);
          font-weight: 500;
        }

        .rf-val {
          color: var(--text-main);
          font-weight: 600;
          text-align: right;
        }

        .highlight-ref {
          color: var(--primary-color);
          font-weight: 700;
        }

        .receipt-amount-box {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 1rem;
          text-align: center;
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .ramt-lbl {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .ramt-val {
          font-family: var(--font-title);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary-color);
        }

        .receipt-footer-text {
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
          border-top: 1px dashed var(--border-color);
          padding-top: 1rem;
        }

        .legal-disclaimer {
          font-size: 0.7rem;
          margin-top: 0.5rem;
          font-style: italic;
        }

        .receipt-actions-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 992px) {
          .donate-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .form-row-2 {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .receipt-actions-buttons {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Donate;
