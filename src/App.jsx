import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import FormPage from './pages/FormPage/FormPage';
import CardPage from './pages/CardPage/CardPage';
import Layout from './components/Layout/Layout';

function App() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    setUserData(data);
    navigate('/card');
  };

  const clearForm = () => {
    setUserData(null);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <FormPage onSubmit={handleFormSubmit} />
          </Layout>
        }
      />
      <Route
        path="/card"
        element={
          userData ? (
            <Layout>
              <CardPage userData={userData} clearForm={clearForm} />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
