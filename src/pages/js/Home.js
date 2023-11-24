import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CharityTable from './CharityTable';

// In Home.js

function Home() {
  const navigate = useNavigate();

  const columns = React.useMemo(
    () => [
      { Header: 'Charity Name', accessor: 'name' },
      { Header: 'Fund', accessor: 'number' },
    ],
    []
  );

  // Read data from LocalStorage
  const charityData = JSON.parse(localStorage.getItem('charities')) || [
    // Default data if LocalStorage is empty
    { name: 'Charity 1', number: 100 },
    // ... other default rows
  ];

  const data = React.useMemo(() => charityData, [charityData]);

  const handleRowClick = (row) => {
    navigate(`/donation/${row.original.name}`);
  };

  return (
    <div className="App">
      <CharityTable columns={columns} data={data} onRowClick={handleRowClick} />
    </div>
  );
}


export default Home;