import Table from "./components/Table.js";

// Component react
function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colspan="2">Liste contacts</th>
          </tr>
        </thead>
        <Table />
      </table>
    </div>
  );
}

export default App;
