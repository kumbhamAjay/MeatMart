import { StrictMode } from 'react'; // Importing StrictMode for highlighting potential problems in the app
import { createRoot } from 'react-dom/client'; // React's root rendering method (React 18+)
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing global CSS styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Creating the root React element and rendering the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
