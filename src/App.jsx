import { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';
import BusinessCard from './components/BusinessCard/BusinessCard';
import './App.scss';

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
      <Route path="/" element={<Form onSubmit={handleFormSubmit} />} />
      <Route
        path="/card"
        element={userData ? <BusinessCard userData={{ ...userData, clearForm }} /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
