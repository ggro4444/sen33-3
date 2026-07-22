import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { Rules } from './pages/Rules';
import { FAQ } from './pages/FAQ';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
