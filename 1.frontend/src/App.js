import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/Layout';
import RegisterForm from './pages/auth/RegisterForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
    </Routes>
  );
}

export default App;