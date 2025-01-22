import React from 'react';
import { createRoot } from 'react-dom/client';
import ExampleApp from './ExampleApp';
import RegisterServiceWorker from './registerServiceWorker';

const root = createRoot(document.getElementById('root'));
root.render(<ExampleApp />)
RegisterServiceWorker();
