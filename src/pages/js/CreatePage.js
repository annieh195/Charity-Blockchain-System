import React from 'react';
import '../css/CreatePage.css';

function CreatePage() {
  return (
    <div className="charity-container">
      <header>Create a Charity Fund</header>
      <section className="charity-section">
        <div className="charity-info">
          <input type="text" placeholder="Charity Name" />
          <input type="number" placeholder="Funds to be raised" min="1" step="1" />
          <textarea placeholder="Description"></textarea>
          <div className="image-placeholder">Drop Image here</div>
          <button>Create</button>
        </div>
      </section>
    </div>
  );
}

export default CreatePage;
