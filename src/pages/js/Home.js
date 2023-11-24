import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CharityTable from './CharityTable';

function Home() {
  const navigate = useNavigate(); // Hook to enable programmatic navigation

  const columns = React.useMemo(
    () => [
      { Header: 'Charity Name', accessor: 'name' },
      { Header: 'Fund', accessor: 'number' }, // Column for numbers
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { name: 'Charity 1', number: 100 },
      { name: 'Charity 2', number: 200 },
      { name: 'Charity 3', number: 300 },
      { name: 'Charity 4', number: 400 },
      { name: 'Charity 5', number: 500 },
      { name: 'Charity 6', number: 600 },
      { name: 'Charity 7', number: 700 },
      { name: 'Charity 8', number: 800 },
      // Add other data rows here
    ],
    []
  );

  const handleRowClick = (row) => {
    // Use navigate to redirect to the charity-specific page
    navigate(`/donation/${row.original.name}`);
  };

  return (
    <div className="App">
      <CharityTable columns={columns} data={data} onRowClick={handleRowClick} />
    </div>
  );
}

export default Home;
