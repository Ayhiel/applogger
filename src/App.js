import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddLogs } from "./components/AddLogs";
import { GetLogs } from "./components/GetLogs";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<AddLogs />}/>
            <Route path="/addlogs" element={<AddLogs />}/>
            <Route path="/getlogs" element={<GetLogs />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
