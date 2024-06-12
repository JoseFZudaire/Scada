import './App.css';
import Boiler from './views/Boiler/Boiler';
import Condenser from './views/Condenser/Condenser';
import DistillationTower from './views/DistillationTower/DistillationTower';
import Storage from './views/Storage/Storage';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Layout from "./views/Layout/Layout";

function App() {
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
    />

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Boiler />} />
            <Route path="boiler" element={<Boiler />} />
            <Route path="condenser" element={<Condenser />} />
            <Route path="distillation" element={<DistillationTower />} />
            <Route path="storage" element={<Storage />} />
            <Route path="*" element={<Condenser />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
