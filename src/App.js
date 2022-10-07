import { createContext, useEffect, useState } from "react";
import data from "./component/data/index";
import table from "./component/table/index";
import "./App.css";
import Table from "./component/table/index";

export const user = createContext();

function App() {
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData((currentData) => [...data]);
  }, []);
  console.log(currentData);
  return (
    <user.Provider value={{ currentData, setCurrentData }}>
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <Table />
          </tbody>
        </table>
      </div>
    </user.Provider>
  );
}

export default App;
