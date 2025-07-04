import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
// import StarRating from './components/StarRating';
import TempTextPractise from './components/TempTextPractise';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={['terrible', 'bad', 'ok', 'good', 'great']}
      defaultRating={3}
    /> */}
    <TempTextPractise />
  </StrictMode>
);
