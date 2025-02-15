import {Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./Components/Home";
import Form from "./Components/Form";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1>Hello</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
