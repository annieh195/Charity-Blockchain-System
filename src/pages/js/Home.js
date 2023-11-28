import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components from App.js
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

function Home() {
  const navigate = useNavigate();

  const charityData = JSON.parse(localStorage.getItem('charities')) || [];

  const handleRowClick = (row) => {
    // Adjust based on how row data is structured
    navigate(`/donation/${row.name}`);
  };

  return (
    <AppContainer>
      <MainContent>
        <ByteCoinHeading>Charity Funds</ByteCoinHeading>
        <DonationSection>
          <TableContainer>
            <TableRow isHeader>
              <TableCell>Charity Name</TableCell>
              <TableCell>Money Raised</TableCell>
            </TableRow>
            {charityData.map((charity, index) => (
              <TableRow key={index} onClick={() => handleRowClick(charity)}>
                <TableCell>{charity.name}</TableCell>
                <TableCell>${charity.number}</TableCell>
              </TableRow>
            ))}
          </TableContainer>
        </DonationSection>
      </MainContent>
    </AppContainer>
  );
}

export default Home;
