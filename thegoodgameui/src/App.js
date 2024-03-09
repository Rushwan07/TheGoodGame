import { useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";

function App() {
  const [searchData, setSearchData] = useState([]);
  console.log("Searched dattaaaaaaaaaa", searchData)
  return (
    <div className="App">
      <Navbar setSearchResults={setSearchData} />
      <Cards searchData={searchData} />
    </div>
  );
}

export default App;
