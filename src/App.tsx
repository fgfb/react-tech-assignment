import "./App.css";
import mapData from "./data.json";
import Map from "./components/Map";
import Table from "./components/Table";
import {ImportedDataType} from "./types";
import {mapImportedData} from "./util/helper";

function App() {
  const importedData: ImportedDataType = mapData as ImportedDataType;
  const processedData = mapImportedData(importedData);
  return (
    <div className="app">
      <h1>Map</h1>
      <Map data={processedData} />
      <div>
        <h1>Table</h1>
        <Table data={processedData} />
      </div>
    </div>
  );
}

export default App;
