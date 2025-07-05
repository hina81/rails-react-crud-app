import Editor from "./Editor";
import { Routes, Route } from "react-router";

const App = () => (
  <Routes>
    <Route path="/events/*" element={<Editor />} />
  </Routes>
);

export default App;
