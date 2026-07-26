import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Journal from './pages/Journal';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './components/ProjectDetail';
import JournalDetail from './components/JournalDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<Portfolio />} />
          <Route path="proyectos/:id" element={<ProjectDetail />} />
          <Route path="journal" element={<Journal />} />
          <Route path="journal/:id" element={<JournalDetail />} />
          <Route path="sobre-mi" element={<About />} />
          <Route path="dialogo" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
