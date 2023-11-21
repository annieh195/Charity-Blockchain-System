import React from 'react';
import Navbar from './components/Navbar';
import CharityTable from './components/CharityTable';

function App() {
  const columns = React.useMemo(
    () => [
      { Header: 'Charity Name', accessor: 'name' },
      // Add other column headers here if needed
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { name: 'Charity 1' },
      { name: 'Charity 2' },
      { name: 'Charity 3' },
      { name: 'Charity 4' },
      { name: 'Charity 5' },
      { name: 'Charity 6' },
      { name: 'Charity 7' },
      { name: 'Charity 8' },
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
