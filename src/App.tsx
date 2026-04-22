/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Versions from "./pages/Versions";

export default function App() {
  return (
    <Router basename="/rrdis-web">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/versions" element={<Versions />} />
      </Routes>
    </Router>
  );
}
