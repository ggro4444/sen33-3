import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Rooms = lazy(() => import('./pages/Rooms').then(m => ({ default: m.Rooms })));
const Plans = lazy(() => import('./pages/Plans').then(m => ({ default: m.Plans })));
const Rules = lazy(() => import('./pages/Rules').then(m => ({ default: m.Rules })));
const FAQ = lazy(() => import('./pages/FAQ').then(m => ({ default: m.FAQ })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-warm-bg">
    <div className="text-warm-text/40 text-lg tracking-[0.2em]">載入中...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  );
};

export default App;
