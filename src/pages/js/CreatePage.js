import React, { useState } from 'react';
import { initWeb3, createNewFund } from './Web3Client';
import '../css/CreatePage.css';

function CreatePage() {
  const [charityName, setCharityName] = useState('');
  const [fundsRequired, setFundsRequired] = useState('');
  const [description, setDescription] = useState('');
/*
  useEffect(() => {
    initWeb3();
}, []);
*/
// In CreatePage.js

const createFund = async () => {
  if (!charityName || !fundsRequired || !description) {
    alert("Please fill all the fields");
    return;
  }

  console.log('Creating fund:', { charityName, fundsRequired, description });
  await createNewFund(charityName, description, fundsRequired);

  // Retrieve existing charities and add new one
  if (window.confirm("Confirm")) {
  const existingCharities = JSON.parse(localStorage.getItem('charities')) || [];
  existingCharities.push({ 
    name: charityName, 
    number: fundsRequired,
    description: description  // Include description here
  });
  localStorage.setItem('charities', JSON.stringify(existingCharities));
  localStorage.clear();
  setCharityName('');
  setFundsRequired('');
  setDescription('');
  }
};


  return (
    <div className="charity-container">
      <header>Create a Charity Fund</header>
      <section className="charity-section">
        <div className="charity-info">
          <input
            type="text"
            placeholder="Charity Name"
            value={charityName}
            onChange={(e) => setCharityName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Funds to be raised"
            min="1"
            step="1"
            value={fundsRequired}
            onChange={(e) => setFundsRequired(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button onClick={createFund}>Create</button>
        </div>
      </section>
    </div>
  );
}

export default CreatePage;
