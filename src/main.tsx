import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Importando createRoot corretamente
import App from './App.tsx';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
