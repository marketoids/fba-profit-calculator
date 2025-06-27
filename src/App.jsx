import { useState, useEffect } from 'react';

function App() {
  const [form, setForm] = useState({
    sellingPrice: '',
    costOfGoods: '',
    shippingCost: '',
    packagingCost: '',
    gstRate: 18,
    category: 'general',
  });

  const [result, setResult] = useState({
    referralFee: 0,
    fbaFee: 0,
    closingFee: 0,
    gstOnFees: 0,
    netProfit: 0,
    profitMargin: 0,
    roi: 0,
  });

  const referralFeeRates = {
    general: 0.15,
    books: 0.08,
    fashion: 0.17,
    electronics: 0.07,
    beauty: 0.15,
    grocery: 0.06,
    home: 0.12,
    toys: 0.13,
    baby: 0.12,
    sports: 0.10,
    pet: 0.12,
    mobile: 0.06,
    appliances: 0.08,
  };

  const fbaFee = 45;
  const closingFee = 10;

  const calculate = () => {
    const sp = parseFloat(form.sellingPrice) || 0;
    const cog = parseFloat(form.costOfGoods) || 0;
    const ship = parseFloat(form.shippingCost) || 0;
    const pack = parseFloat(form.packagingCost) || 0;
    const gstRate = parseFloat(form.gstRate) || 0;

    const referralFee = sp * (referralFeeRates[form.category] || 0.15);
    const totalAmazonFee = referralFee + fbaFee + closingFee;
    const gstOnFees = totalAmazonFee * (gstRate / 100);
    const totalCost = cog + ship + pack + totalAmazonFee + gstOnFees;

    const netProfit = sp - totalCost;
    const profitMargin = sp > 0 ? (netProfit / sp) * 100 : 0;
    const roi = (cog + ship + pack) > 0 ? (netProfit / (cog + ship + pack)) * 100 : 0;

    setResult({
      referralFee,
      fbaFee,
      closingFee,
      gstOnFees,
      netProfit,
      profitMargin,
      roi,
    });
  };

  useEffect(() => {
    calculate();
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({
      sellingPrice: '',
      costOfGoods: '',
      shippingCost: '',
      packagingCost: '',
      gstRate: 18,
      category: 'general',
    });
  };

  return (
  <div
    style={{
      backgroundColor: '#121212',
      color: '#ffffff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Segoe UI, Roboto, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
    }}
  >
    {/* Left Sidebar Ad */}
    <div
      style={{
        width: '120px',
        backgroundColor: '#111',
        borderRadius: '10px',
        padding: '1rem',
        textAlign: 'center',
        color: '#aaa',
        border: '1px dashed #444',
        alignSelf: 'flex-start',
        height: 'fit-content',
      }}
    >
      <p>📢 Ad Slot</p>
      <small>Logistics / Ads</small>
    </div>

    {/* Main Calculator App */}
    <div
      style={{
        maxWidth: '700px',
        width: '100%',
        background: '#1e1e1e',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          marginBottom: '1.5rem',
          color: '#00ffe5',
        }}
      >
        🧮 Amazon FBA Profit Calculator (India)
      </h1>

      {/* Top Ad */}
      <div
        style={{
          marginBottom: '1.5rem',
          padding: '1rem',
          backgroundColor: '#111',
          borderRadius: '10px',
          textAlign: 'center',
          color: '#aaa',
          border: '1px dashed #444',
        }}
      >
        <p style={{ marginBottom: '0.5rem' }}>📊 Sponsored Ad (Top Banner)</p>
        <small>This space is reserved for future monetization.</small>
      </div>

      {/* Form Section */}
      <form style={{ display: 'grid', gap: '1.25rem' }}>
        {[
          { label: 'Selling Price (₹)', name: 'sellingPrice' },
          { label: 'Cost of Goods (₹)', name: 'costOfGoods' },
          { label: 'Shipping to Amazon (₹)', name: 'shippingCost' },
          { label: 'Packaging Cost (₹)', name: 'packagingCost' },
          { label: 'GST Rate (%)', name: 'gstRate' },
        ].map((field) => (
          <label key={field.name} style={{ fontWeight: 600, fontSize: '1.1rem' }}>
            {field.label}
            <input
              type="number"
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.7rem',
                marginTop: '0.4rem',
                border: '1px solid #444',
                borderRadius: '8px',
                fontSize: '1.1rem',
                backgroundColor: '#2c2c2c',
                color: '#fff',
              }}
            />
          </label>
        ))}

        <label style={{ fontWeight: 600, fontSize: '1.1rem' }}>
          Product Category
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.7rem',
              marginTop: '0.4rem',
              border: '1px solid #444',
              borderRadius: '8px',
              fontSize: '1.1rem',
              backgroundColor: '#2c2c2c',
              color: '#fff',
            }}
          >
            <option value="general">General</option>
            <option value="books">Books</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="beauty">Beauty</option>
            <option value="grocery">Grocery</option>
            <option value="home">Home & Kitchen</option>
            <option value="toys">Toys & Games</option>
            <option value="baby">Baby Products</option>
            <option value="sports">Sports</option>
            <option value="pet">Pet Supplies</option>
            <option value="mobile">Mobiles</option>
            <option value="appliances">Appliances</option>
          </select>
        </label>
      </form>

      {/* Middle Ad */}
      <div
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: '#111',
          borderRadius: '10px',
          textAlign: 'center',
          color: '#aaa',
          border: '1px dashed #444',
        }}
      >
        <p style={{ marginBottom: '0.5rem' }}>📈 Ad Space - Engage Sellers</p>
        <small>Ideal for tools, software or logistics ads.</small>
      </div>

      {/* Reset Button */}
      <button
        type="button"
        onClick={handleReset}
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 1.2rem',
          backgroundColor: '#ff4d4d',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
      >
        🔄 Reset Form
      </button>

      {/* Results Section */}
      <div
        style={{
          marginTop: '2rem',
          background: '#222',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid #333',
        }}
      >
        <h2
          style={{
            fontSize: '1.4rem',
            marginBottom: '1rem',
            color: '#00ff91',
          }}
        >
          📊 Profit Summary
        </h2>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            lineHeight: 1.9,
            fontSize: '1.1rem',
          }}
        >
          <li><strong>Referral Fee:</strong> ₹{result.referralFee.toFixed(2)}</li>
          <li><strong>FBA Fee:</strong> ₹{result.fbaFee.toFixed(2)}</li>
          <li><strong>Closing Fee:</strong> ₹{result.closingFee.toFixed(2)}</li>
          <li><strong>GST on Fees:</strong> ₹{result.gstOnFees.toFixed(2)}</li>
          <li><strong>Net Profit:</strong> ₹{result.netProfit.toFixed(2)}</li>
          <li><strong>Profit Margin:</strong> {result.profitMargin.toFixed(2)}%</li>
          <li><strong>ROI:</strong> {result.roi.toFixed(2)}%</li>
        </ul>

        {/* Bottom Ad */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#111',
            borderRadius: '10px',
            textAlign: 'center',
            color: '#aaa',
            border: '1px dashed #444',
          }}
        >
          <p style={{ marginBottom: '0.5rem' }}>💼 Ad - Grow Your Amazon Sales</p>
          <small>Ads like Helium10, logistics partners, etc. can go here.</small>
        </div>
      </div>
    </div>

    {/* Right Sidebar Ad */}
    <div
      style={{
        width: '120px',
        backgroundColor: '#111',
        borderRadius: '10px',
        padding: '1rem',
        textAlign: 'center',
        color: '#aaa',
        border: '1px dashed #444',
        alignSelf: 'flex-start',
        height: 'fit-content',
      }}
    >
      <p>🚀 Promote</p>
      <small>Amazon Sellers</small>
    </div>
  </div>
);

          🧮 Amazon FBA Profit Calculator (India)
        </h1>

        <form style={{ display: 'grid', gap: '1.25rem' }}>
          {[
            { label: 'Selling Price (₹)', name: 'sellingPrice' },
            { label: 'Cost of Goods (₹)', name: 'costOfGoods' },
            { label: 'Shipping to Amazon (₹)', name: 'shippingCost' },
            { label: 'Packaging Cost (₹)', name: 'packagingCost' },
            { label: 'GST Rate (%)', name: 'gstRate' }
          ].map((field) => (
            <label key={field.name} style={{ fontWeight: 600, fontSize: '1.1rem' }}>
              {field.label}
              <input
                type="number"
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  marginTop: '0.4rem',
                  border: '1px solid #444',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  backgroundColor: '#2c2c2c',
                  color: '#fff'
                }}
              />
            </label>
          ))}

          <label style={{ fontWeight: 600, fontSize: '1.1rem' }}>
            Product Category
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.7rem',
                marginTop: '0.4rem',
                border: '1px solid #444',
                borderRadius: '8px',
                fontSize: '1.1rem',
                backgroundColor: '#2c2c2c',
                color: '#fff'
              }}
            >
              <option value="general">General</option>
              <option value="books">Books</option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="beauty">Beauty</option>
              <option value="grocery">Grocery</option>
              <option value="home">Home & Kitchen</option>
              <option value="toys">Toys & Games</option>
              <option value="baby">Baby Products</option>
              <option value="sports">Sports</option>
              <option value="pet">Pet Supplies</option>
              <option value="mobile">Mobiles</option>
              <option value="appliances">Appliances</option>
            </select>
          </label>
        </form>

        <button
          type="button"
          onClick={handleReset}
          style={{
            marginTop: '1.5rem',
            padding: '0.75rem 1.2rem',
            backgroundColor: '#ff4d4d',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          🔄 Reset Form
        </button>

        {/* Results */}
        <div style={{
          marginTop: '2rem',
          background: '#222',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid #333',
        }}>
          <h2 style={{
            fontSize: '1.4rem',
            marginBottom: '1rem',
            color: '#00ff91'
          }}>
            📊 Profit Summary
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            lineHeight: 1.9,
            fontSize: '1.1rem'
          }}>
            <li><strong>Referral Fee:</strong> ₹{result.referralFee.toFixed(2)}</li>
            <li><strong>FBA Fee:</strong> ₹{result.fbaFee.toFixed(2)}</li>
            <li><strong>Closing Fee:</strong> ₹{result.closingFee.toFixed(2)}</li>
            <li><strong>GST on Fees:</strong> ₹{result.gstOnFees.toFixed(2)}</li>
            <li><strong>Net Profit:</strong> ₹{result.netProfit.toFixed(2)}</li>
            <li><strong>Profit Margin:</strong> {result.profitMargin.toFixed(2)}%</li>
            <li><strong>ROI:</strong> {result.roi.toFixed(2)}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
