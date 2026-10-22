import App from './App.jsx';

// Une route = une page HTML statique générée au build :
//   /    -> dist/index.html     (FR)
//   /en  -> dist/en/index.html  (EN)
export const routes = [
  { path: '/', element: <App lang="fr" /> },
  { path: '/en', element: <App lang="en" /> },
];
