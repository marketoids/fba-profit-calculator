import React, { useState } from 'react'

const amazonFees = {
  "Apparel": 17,
  "Books": 8,
  "Electronics": 5,
  "Beauty": 10,
  "Home": 10,
  "Grocery": 6,
  "Toys": 10,
  "Automotive": 12,
  "Others": 10
};

export default function App() {
  const [cost, setCost] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Others')
  const [profit, setProfit] = useState(null)

  const calculateProfit = () => {
    const costNum = parseFloat(cost)
    const priceNum = parseFloat(price)
    const feePercent = amazonFees[category] || 10
    const amazonFee = (priceNum * feePercent) / 100
    const result = priceNum - costNum - amazonFee
    setProfit(result.toFixed(2))
  }

  return (
    <div className="container">
      <h1>Amazon FBA Profit Calculator (India)</h1>

      <label>
        Product Cost (₹):
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </label>

      <label>
        Selling Price (₹):
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {Object.keys(amazonFees).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <button onClick={calculateProfit}>Calculate Profit</button>

      {profit !== null && (
        <div className="result">
          <strong>Estimated Profit: ₹{profit}</strong>
        </div>
      )}
    </div>
  )
}
