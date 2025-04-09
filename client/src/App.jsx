import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./pages";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create" element={<Create />} />
          </Route>
          <Route path="/employee/feed" element={<Feed />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
