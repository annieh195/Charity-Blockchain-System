// App.js
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import CharityTable from './CharityTable';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.main`
  margin: 40px 0;
  text-align: center;
`;

const DonationSection = styled.section`
  width: 80%;
`;

const ByteCoinHeading = styled.h1`
  margin-bottom: 20px;
`;

const TotalRaised = styled.h2`
  color: #4CAF50;
  margin-bottom: 10px;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 20px;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const TableContainer = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 15px;
  background-color: ${(props) => (props.isHeader ? '#282c34' : 'white')};
  color: ${(props) => (props.isHeader ? 'white' : 'inherit')};
  font-weight: ${(props) => (props.isHeader ? 'bold' : 'normal')};
`;

const TableCell = styled.div`
  width: 50%;
  text-align: center;
`;

function App() {
  const [donations, setDonations] = useState([
    { name: 'Charity 1', amountRaised: 1000 },
    { name: 'Charity 2', amountRaised: 500 },
    { name: 'Charity 3', amountRaised: 1200 },
    // Add other charities and their amounts here
  ]);

  const totalRaised = useMemo(() => donations.reduce((total, charity) => total + charity.amountRaised, 0), [donations]);

  const handleRowClick = (row) => {
    // Placeholder for handling the click event
    console.log("Clicked row: ", row.original.name);
  };

  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <ByteCoinHeading>Charity Funds</ByteCoinHeading>
        <DonationSection>
          <TotalRaised>Total Raised: ${totalRaised}</TotalRaised>
          <TableContainer>
            <TableRow isHeader>
              <TableCell>Charity Name</TableCell>
              <TableCell>Money Raised</TableCell>
            </TableRow>
            {donations.map((charity, index) => (
              <TableRow key={index}>
                <TableCell>{charity.name}</TableCell>
                <TableCell>${charity.amountRaised}</TableCell>
              </TableRow>
            ))}
          </TableContainer>
        </DonationSection>
      </MainContent>
      <Footer>
        <p>&copy; 2023 Donate for a Cause. All rights reserved.</p>
      </Footer>
    </AppContainer>
  );
}

export default App;
