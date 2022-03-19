import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './global/components/Layout';

import Todo from './pages/todo';
import AboutApp from './pages/about/about-app';
import AboutAuthor from './pages/about/about-author';
import NotFound from './pages/notFound';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Todo />} />

        <Route path="about">
          <Route index element={<Navigate to="about-app" />} />
          <Route path="about-app" element={<AboutApp />} />
          <Route path="about-author" element={<AboutAuthor />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>
);

export default App;
