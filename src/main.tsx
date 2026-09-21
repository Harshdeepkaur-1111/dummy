import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
container.innerHTML = '';

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
