import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/DonationPage.css';
import { initWeb3 } from './Web3Client';

function DonationPage() {
  const { charityName } = useParams(); // Getting the charity name from URL
  const [charityInfo, setCharityInfo] = useState({ name: '', description: '', targetAmount: 0 });
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    initWeb3(); // Initialize Web3

    // Fetch charity information from LocalStorage
    const allCharities = JSON.parse(localStorage.getItem('charities')) || [];
    const foundCharity = allCharities.find(charity => charity.name === charityName);

    if (foundCharity) {
      // Assuming that the charity's description and targetAmount are stored as well
      setCharityInfo({
        name: foundCharity.name,
        description: foundCharity.description,
        targetAmount: foundCharity.number
      });
    }
  }, [charityName]);

  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = async () => {

    const newDonation = { name: "Your Name", amount: parseFloat(donationAmount) };
    setDonations([...donations, newDonation]);
    setDonationAmount('');
  };

  const totalAmount = donations.reduce((sum, donation) => sum + donation.amount, 0);

  const handleAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  return (
    <div className="donation-page">
      <div className="left-section">
        <section className="charity-info">
          <h2>{charityInfo.name || 'Charity Name'}</h2>
          <div className="media-container"></div>
          <textarea 
            className="textarea" 
            placeholder="Charity description"
            value={charityInfo.description || ''}
            readOnly
          ></textarea>
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
          <button onClick={handleDonate}>Donate Here</button>
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
                  <td>${donation.amount}</td>
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
