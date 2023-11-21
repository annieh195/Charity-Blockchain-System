import React from 'react';
import Navbar from './components/Navbar';
import CharityTable from './components/CharityTable';

function App() {
  const columns = React.useMemo(
    () => [
      { Header: 'Charity Name', accessor: 'name' },
      { Header: 'Fund', accessor: 'number' }, // Added a new column for numbers
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
    // Redirect to a charity-specific page
    // This is a placeholder action. Replace it with your actual redirection logic.
    console.log("Clicked row: ", row.original.name);
    // For example, you might navigate to a detailed page for each charity
    // window.location.href = `/charity/${row.original.name}`;
  };

  return (
    <div className="App">
      <Navbar />
      <CharityTable columns={columns} data={data} onRowClick={handleRowClick} />
    </div>
  );
}

export default App;
