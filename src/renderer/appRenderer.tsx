import React from 'react';
import { createRoot } from 'react-dom/client';
import WindowFrame from '@misc/window/components/WindowFrame';
import Application from '@components/Application';
import { GlobalProvider } from './Context/GlobalContext';

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = (
  <GlobalProvider>
    <WindowFrame title='ERWT Boilerplate' platform='windows'>
      <Application />
    </WindowFrame>
  </GlobalProvider>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
