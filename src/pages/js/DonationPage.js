import React, { useState, useEffect } from 'react';
import '../css/DonationPage.css';

function DonationPage() {
  const [donations, setDonations] = useState([
    { name: "A H", amount: 50 },
    { name: "Abc Xyz", amount: 100 },
  ]);

  const [donationAmount, setDonationAmount] = useState('');

  const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0);

  const handleAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  return (
    <div className="donation-page">
      <div className="left-section">
        <section className="charity-info">
          <h2>Education Fund</h2>
          <div className="media-container"></div>
          <textarea className="textarea" placeholder="Charity description"></textarea>
        </section>
      </div>

      <div className="right-section">
        <section className="donation-info">
          <p>Current amount: ${totalAmount}</p>
          <p>Number donations: {donations.length}</p>
          <label htmlFor="donationAmount">Enter your donation amount:</label>
          <input 
            type="number" 
            id="donationAmount"
            value={donationAmount}
            onChange={handleAmountChange}
            placeholder="Amount"
            className="donation-amount-input" 
          />
          <button>Donate Here</button>
          <table className="donation-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr key={index}>
                  <td>{donation.name}</td>
                  <td>{donation.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default DonationPage;
